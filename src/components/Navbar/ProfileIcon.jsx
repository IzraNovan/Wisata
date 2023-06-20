import { useState, useEffect, useRef } from 'react';
import { GrFormDown } from 'react-icons/gr';
import { useLocation, useNavigate } from 'react-router-dom';
import { useStateContext } from '../../context/StateContext';
import { request } from '../../utils/server';
import { toTitleCase } from '../../utils/helper';

function ProfileIcon({ onLogout }) {
	const location = useLocation();
	const navigate = useNavigate();
	const dropdownRef = useRef(null);
	const { profile, setProfile } = useStateContext();
	const [photo, setPhoto] = useState(null);
	const [nama, setNama] = useState('');
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleDropdownItemClick = (item) => {
		if (item === 'Profil Saya') navigate('/profile');
		if (item === 'Ubah Password') navigate('/ubahpassword');
		if (item === 'Keluar') onLogout();
	};

	const handleClickOutside = (event) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
			const isIconClicked = event.target.closest('.icon-container');
			if (!isIconClicked) {
				setIsDropdownOpen(false);
			}
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	useEffect(() => {
		setIsDropdownOpen(false);
	}, [location.pathname]);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	useEffect(() => {
		setLoading(true);
		const getProfile = async () => {
			try {
				const response = await request.get('/user/user/me');
				let data = response.data.data;
				setPhoto(data?.photo);
				setNama(data?.username);
				setProfile(data);
				setLoading(false);
			} catch (error) {
				console.log(error.message);
				setLoading(false);
			}
		};

		getProfile();
	}, []);

	return (
		<div className='flex items-center gap-5'>
			<img
				src={profile?.photo}
				alt='profileImg'
				className='w-[32px] h-[32px] rounded-full bg-cover'
			/>
			<span className='font-medium'>{toTitleCase(profile?.username)}</span>
			<div
				className='icon-container'
				onClick={toggleDropdown}>
				<GrFormDown />
			</div>

			{isDropdownOpen && (
				<div
					ref={dropdownRef}
					className='absolute right-8 top-[4.5rem] mt-2 bg-white text-gray-700 rounded shadow w-44 z-[999]'>
					<ul className='py-2'>
						<li
							className='px-4 py-2 cursor-pointer'
							onClick={() => handleDropdownItemClick('Profil Saya')}>
							<span className='hover:text-orange-500 hover:font-medium'>
								Profil Saya
							</span>
						</li>
						<li
							className='px-4 py-2 cursor-pointer'
							onClick={() => handleDropdownItemClick('Ubah Password')}>
							<span className='hover:text-orange-500 hover:font-medium'>
								Ubah Password
							</span>
						</li>
						<li
							className='px-4 py-2 cursor-pointer'
							onClick={() => handleDropdownItemClick('Keluar')}>
							<span className='hover:text-orange-500 hover:font-medium'>
								Keluar
							</span>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
}

export default ProfileIcon;
