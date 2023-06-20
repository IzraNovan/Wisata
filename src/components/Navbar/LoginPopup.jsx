import { useState } from 'react';
import { useStateContext } from '../../context/StateContext';
import { RxAvatar } from 'react-icons/rx';
import { VscKey, VscEye } from 'react-icons/vsc';
import { useForm } from 'react-hook-form';
import { request } from '../../utils/server';
import Cookies from 'js-cookie';
import { toast } from 'react-hot-toast';

function LoginPopup() {
	const { setLoginModal, setAuthenticated } = useStateContext();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(true);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const { register, handleSubmit } = useForm();

	const onSubmit = async () => {
		setLoading(true);
		const data = JSON.stringify({
			email: email,
			password: password,
		});

		try {
			const response = await request.post('/auth/login/', data, {
				headers: {
					'Content-Type': 'application/json',
				},
			});
			console.log(JSON.stringify(response.data));
			const access = response.data.access;
			const refresh = response.data.refresh;
			Cookies.set('email', email);
			Cookies.set('access', access);
			Cookies.set('refresh', refresh);
			setAuthenticated(true);
			toast.success('Login berhasil');
			setLoading(false);
			setLoginModal(false);
		} catch (error) {
			console.log(error);
			setError(error.response.data.detail);
			setAuthenticated(false);
			setLoading(false);
			toast.error('Login gagal');
		}
	};

	return (
		<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[99999] outline-none focus:outline-none bg-black/70'>
			<div className='flex animate-zoom-out relative w-auto my-6 mx-auto max-w-6xl justify-center'>
				<div
					className='bg-[#FCFBFF] rounded-xl p-4 md:p-10 h-[230px] md:h-auto w-[625px] z-50 flex flex-col items-center relative gap-4'
					aria-hidden='true'>
					<button
						onClick={() => setLoginModal(false)}
						className='font-semibold leading-none float-right ml-auto border-0 bg-transparent text-3xl text-black outline-none focus:outline-none w-[40px] absolute top-3 right-4'>
						<span className='mr-6 block text-4xl font-extralight text-black/50 outline-none focus:outline-none hover:bg-slate-100 rounded-full px-2 w-full'>
							×
						</span>
					</button>

					<h1 className='text-xl font-semibold'>Login</h1>

					<form
						className='flex flex-col w-full gap-3'
						onSubmit={handleSubmit(onSubmit)}>
						<div>
							<label
								htmlFor='email'
								className='font-semibold'>
								Username
							</label>
							<div
								className='w-full bg-white relative border-[3px] focus:border-4 inset-1 rounded-lg overflow-hidden'
								style={
									error
										? { border: '3px solid red' }
										: { border: '3px solid salmon' }
								}>
								<RxAvatar className='absolute top-3 left-3 text-xl' />
								<input
									{...register('email')}
									type='text'
									id='email'
									className='w-full pl-14 border-0 items-center justify-center h-full focus:border-0 focus:outline-0 py-3'
									placeholder='Username'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</div>
						</div>
						<p className={`text-red-500 ${!error && 'hidden'} `}>{error}</p>

						<div>
							<label
								htmlFor='password'
								className='font-semibold'>
								Password
							</label>
							<div
								className='w-full bg-white relative border-[3px] focus:border-4 inset-1 rounded-lg overflow-hidden'
								style={
									error
										? { border: '3px solid red' }
										: { border: '3px solid salmon' }
								}>
								<VscKey className='absolute top-3 left-3 text-xl' />
								<input
									{...register('password')}
									type={showPassword ? 'password' : 'text'}
									id='password'
									className='w-full pl-14 border-0 items-center justify-center h-full focus:border-0 focus:outline-0 py-3'
									placeholder='Password'
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
								/>
								<VscEye
									className='absolute top-3 right-3 text-xl'
									onClick={() => setShowPassword(!showPassword)}
								/>
							</div>
						</div>

						<div className='flex w-full justify-center mt-4'>
							<button
								className='flex w-[300px] py-4 justify-center items-center bg-orange-500 text-white font-semibold tracking-wider rounded-full '
								disabled={loading}
								style={loading ? { cursor: 'wait' } : { cursor: 'pointer' }}>
								{loading ? 'Loading...' : 'Login'}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default LoginPopup;
