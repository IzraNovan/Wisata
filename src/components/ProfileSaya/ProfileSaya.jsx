import { toTitleCase } from '../../utils/helper';
import { useStateContext } from '../../context/StateContext';
import { useEffect, useState } from 'react';
import { request } from '../../utils/server';
import { AiOutlineCamera } from 'react-icons/ai';
import Animaload from '../Animaload';
import { toast } from 'react-hot-toast';

function ProfileSaya() {
	const { profile, setProfile } = useStateContext();
	const [photo, setPhoto] = useState(null);
	const [image, setImage] = useState(null);
	const [nama, setNama] = useState('');
	const [email, setEmail] = useState('');
	const [alamat, setAlamat] = useState('');
	const [handphone, setHandphone] = useState('');
	const [loading, setLoading] = useState(false);

	const getProfile = async () => {
		try {
			const response = await request.get('/user/user/me');
			let data = response.data.data;
			setPhoto(data?.photo);
			setNama(data?.full_name);
			setEmail(data?.email);
			setAlamat(data?.address);
			setHandphone(data?.handphone);
			setProfile(data);
			setLoading(false);
		} catch (error) {
			console.log(error.message);
			setLoading(false);
		}
	};

	useEffect(() => {
		setLoading(true);
		getProfile();
	}, []);

	const fileChangeHandler = (e) => {
		setPhoto(e.target.files[0]);
		setImage(URL.createObjectURL(e.target.files[0]));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		setLoading(true);

		const updateProfile = async () => {
			try {
				let formData = new FormData();

				if (photo && photo !== profile?.photo) {
					formData.append('photo', photo);
				}

				if (email !== profile.email) {
					formData.append('email', email);
				}

				if (nama !== profile.full_name) {
					formData.append('full_name', nama);
				}

				if (handphone !== profile.handphone) {
					formData.append('handphone', handphone);
				}

				if (alamat !== profile.address) {
					formData.append('address', alamat);
				}

				let config = {
					method: 'patch',
					url: '/user/user/me/',
					headers: {
						'Content-Type': 'multipart/form-data',
					},
					data: formData,
				};

				const response = await request(config);
				console.log(JSON.stringify(response.data));
				getProfile();
				toast.success('Profile berhasil diperbarui');
			} catch (error) {
				console.log(error);
				getProfile();
				toast.error('Gagal memperbarui profil');
			}
		};

		updateProfile();
	};

	return loading ? (
		<Animaload />
	) : (
		<div className='flex flex-col w-full items-center h-auto'>
			<form
				className='w-[90%] flex flex-col gap-3'
				onSubmit={handleSubmit}>
				<div className='flex gap-8 items-center'>
					<div className='relative'>
						<img
							src={image ? image : photo}
							alt='profileImg'
							className='w-[120px] h-[120px] rounded-full border-[6px] border-white'
						/>
						<div
							className='absolute bottom-[2%] right-[10%] z-20 shadow-lg bg-orange-500  border-[2px] border-white rounded-full p-2 cursor-pointer w-8 h-8 flex justify-center items-center'
							onClick={() =>
								document.querySelector('.change-foto_profil').click()
							}>
							<AiOutlineCamera className='text-xl text-white' />
							<input
								type='file'
								hidden
								className='change-foto_profil'
								onChange={fileChangeHandler}
							/>
						</div>
					</div>
					<div className='flex flex-col gap-3'>
						<h1 className='text-4xl font-semibold'>
							{toTitleCase(profile?.full_name)}
						</h1>
						<p>{profile?.address}</p>
					</div>
					<button
						className='w-[150px] absolute right-20 bg-orange-500 text-white py-2 rounded-full'
						type='submit'>
						Simpan
					</button>
				</div>

				<label
					htmlFor='nama'
					className='font-semibold'>
					Nama
				</label>
				<input
					type='text'
					id='nama'
					placeholder='Masukkan nama anda'
					className='w-full py-2.5 px-4 border focus:outline-0'
					value={nama}
					onChange={(e) => setNama(e.target.value)}
				/>

				<label
					htmlFor='email'
					className='font-semibold'>
					Email
				</label>
				<input
					type='email'
					id='email'
					placeholder='Masukkan email anda'
					className='w-full py-2.5 px-4 border focus:outline-0'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<label
					htmlFor='alamat'
					className='font-semibold'>
					Alamat
				</label>
				<textarea
					type='text'
					id='alamat'
					placeholder='Masukkan alamat anda'
					className='w-full py-2.5 px-4 border focus:outline-0 resize-none'
					value={alamat}
					onChange={(e) => setAlamat(e.target.value)}
				/>

				<label
					htmlFor='nohp'
					className='font-semibold'>
					No Handphone
				</label>
				<input
					type='text'
					placeholder='Masukkan no handphone anda'
					className='w-full py-2.5 px-4 border focus:outline-0'
					value={handphone}
					onChange={(e) => setHandphone(e.target.value)}
				/>
			</form>
		</div>
	);
}

export default ProfileSaya;
