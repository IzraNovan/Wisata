import logoSandbox from '../../assets/Logo/logosandbox.png';
import LoginButton from './LoginButton';
import ProfileIcon from './ProfileIcon';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useStateContext } from '../../context/StateContext';
import { request } from '../../utils/server';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

function Navbar() {
	const navigate = useNavigate();
	const { setLoginModal, authenticated, setAuthenticated } = useStateContext();

	useEffect(() => {
		const checkAuthentication = () => {
			const access = Cookies.get('access');
			if (access) {
				setAuthenticated(true);
			} else {
				setAuthenticated(false);
			}
		};

		checkAuthentication();
	}, []);

	const handleLoginSuccess = (access) => {
		Cookies.get('access', access);
		setLoginModal(true);
	};

	const handleLogout = async () => {
		try {
			const data = JSON.stringify({
				refresh: Cookies.get('refresh'),
			});

			const config = {
				method: 'post',
				maxBodyLength: Infinity,
				url: '/auth/logout/',
				headers: {
					'Content-Type': 'application/json',
				},
				data: data,
			};

			const response = await request.request(config);
			navigate('/');
			Cookies.remove('access');
			Cookies.remove('refresh');
			toast.success('Berhasil Logout');
			setAuthenticated(false);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<nav className='flex bg-white justify-between px-24 py-4'>
			<img
				src={logoSandbox}
				alt='sandbox'
				onClick={() => navigate('/')}
				className='cursor-pointer'
			/>
			{authenticated ? (
				<ProfileIcon onLogout={handleLogout} />
			) : (
				<LoginButton onLoginSuccess={handleLoginSuccess} />
			)}
		</nav>
	);
}

export default Navbar;
