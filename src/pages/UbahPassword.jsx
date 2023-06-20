import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { request } from '../utils/server';
import Cookies from 'js-cookie';
import { DebounceInput } from 'react-debounce-input';
import { toast } from 'react-hot-toast';
import { useStateContext } from '../context/StateContext';

function UbahPassword() {
	const { setAuthenticated } = useStateContext();
	const navigate = useNavigate();
	const invalidRef = useRef();
	const validRef = useRef();

	const [oldPassword, setOldPassword] = useState('');
	const [invalid, setInvalid] = useState('');
	const [valid, setValid] = useState('');

	const matchRef = useRef();
	const unmatchRef = useRef();
	const [show, setShow] = useState(false);
	const [newPassword, setNewPassword] = useState('');
	const [confirmNewPassword, setConfirmNewPassword] = useState('');
	const [match, setMatch] = useState('');
	const [unmatch, setUnmatch] = useState('');
	const [disabled, setDisable] = useState(false);

	useEffect(() => {
		const checkOldPasswordValidity = async () => {
			try {
				if (oldPassword !== '') {
					const response = await request.post('auth/login/', {
						email: Cookies.get('email'),
						password: oldPassword,
					});

					setValid('Password benar');
					validRef.current.classList.remove('hidden');
					invalidRef.current.classList.add('hidden');
					setShow(true);
				}
			} catch (error) {
				console.log(error);
				setInvalid('Password tidak valid');
				invalidRef.current.classList.remove('hidden');
				validRef.current.classList.add('hidden');
			}
		};

		checkOldPasswordValidity();
	}, [oldPassword]);

	useEffect(() => {
		if (newPassword !== confirmNewPassword) {
			setUnmatch('Password tidak sesuai');
			unmatchRef.current?.classList.remove('hidden');
			matchRef.current?.classList.add('hidden');
			setDisable(true);
		} else {
			setMatch('Password sesuai');
			matchRef.current?.classList.remove('hidden');
			unmatchRef.current?.classList.add('hidden');
			setDisable(false);
		}
	}, [confirmNewPassword]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		let data = JSON.stringify({
			old_password: oldPassword,
			new_password: newPassword,
		});

		let config = {
			method: 'post',
			maxBodyLength: Infinity,
			url: '/user/user/change-password/',
			headers: {
				'Content-Type': 'application/json',
			},
			data: data,
		};

		request
			.request(config)
			.then((response) => {
				console.log(JSON.stringify(response.data));
				navigate('/');
				Cookies.remove('access');
				Cookies.remove('refresh');
				Cookies.remove('email');
				setAuthenticated(false);
				toast.success('Password berhasil diubah, silahkan login kembali');
			})
			.catch((error) => {
				console.log(error);
				toast.error('Password gagal diubah, silahkan coba lagi');
			});
	};

	return (
		<div className='flex flex-col w-full justify-center items-center pt-16'>
			<h1 className='text-4xl font-semibold'>Ubah Password</h1>

			<form
				className='w-1/2 mt-10 flex flex-col gap-4'
				onSubmit={handleSubmit}>
				<label
					htmlFor='oldPassword'
					className='font-semibold'>
					Password Lama
				</label>
				<DebounceInput
					type='text'
					id='oldPassword'
					debounceTimeout={1000}
					placeholder='Masukkan password lama anda'
					value={oldPassword}
					onChange={(e) => setOldPassword(e.target.value)}
					className='w-full py-2.5 px-4 border focus:outline-0'
					disabled={show}
				/>
				<p
					className='text-red-500 hidden'
					ref={invalidRef}>
					{invalid}
				</p>
				<p
					className='text-green-500 hidden'
					ref={validRef}>
					{valid}
				</p>
				{show && (
					<>
						<label
							htmlFor='newPassword'
							className='font-semibold'>
							Password Baru
						</label>
						<input
							type='text'
							id='newPassword'
							placeholder='Masukkan password baru anda'
							value={newPassword}
							onChange={(e) => setNewPassword(e.target.value)}
							className='w-full py-2.5 px-4 border focus:outline-0'
						/>

						<label
							htmlFor='konfirmasi'
							className='font-semibold'>
							Konfirmasi Password Baru
						</label>
						<DebounceInput
							type='text'
							placeholder='Konfirmasi password baru anda'
							className='w-full py-2.5 px-4 border focus:outline-0'
							debounceTimeout={1000}
							value={confirmNewPassword}
							onChange={(e) => setConfirmNewPassword(e.target.value)}
						/>
						<p
							className='text-red-500 hidden'
							ref={unmatchRef}>
							{unmatch}
						</p>
						<p
							className='text-green-500 hidden'
							ref={matchRef}>
							{match}
						</p>

						<div className='flex w-full justify-end mt-10 gap-4'>
							<button
								className='text-[#F7911A] bg-slate-100 font-semibold px-6 py-2 tracking-wide rounded-full border-2'
								onClick={() => navigate(-1)}>
								Batal
							</button>
							<button
								className='bg-[#F7911A] text-slate-100 font-semibold px-6 py-2 tracking-wide rounded-full'
								type='submit'
								disabled={disabled}
								style={
									disabled ? { cursor: 'not-allowed' } : { cursor: 'pointer' }
								}>
								Simpan
							</button>
						</div>
					</>
				)}
			</form>
		</div>
	);
}

export default UbahPassword;
