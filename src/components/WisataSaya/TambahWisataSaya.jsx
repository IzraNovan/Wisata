import { useState } from 'react';
import { request } from '../../utils/server';
import { toast } from 'react-hot-toast';
import TextEditor from '../WisataSaya/TextEditor';
import Result from '../WisataSaya/Result';
import Leaflet from './Leaflet';

function TambahWisataSaya({ setCreateVisible, setListVisible, refreshData }) {
	const [image, setImage] = useState(null);
	const [photo, setPhoto] = useState(null);
	const [nama, setNama] = useState('');
	const [harga, setHarga] = useState('');
	const [kategori, setKategori] = useState('');
	const [deskripsi, setDeskripsi] = useState('');
	const [alamat, setAlamat] = useState('');
	const [lokasi, setLokasi] = useState('');
	const [data, setData] = useState([]);

	const handleNavigate = () => {
		setCreateVisible(false);
		setListVisible(true);
	};

	const fileChangeHandler = (e) => {
		setImage(e.target.files[0]);
		setPhoto(URL.createObjectURL(e.target.files[0]));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const locationData = {
			type: 'Point',
			coordinates: [110.27467058829461, -7.8419710934859665],
		};

		let formData = new FormData();
		formData.append('name', nama);
		formData.append('price', harga.replace(/[.,]/g, ''));
		formData.append('image', image);
		formData.append('address', alamat);
		formData.append('category', kategori);
		formData.append('description', deskripsi);
		formData.append('location', JSON.stringify(locationData));

		try {
			const response = await request.post(
				'/tourist-object/tourist-object/',
				formData
			);
			const newData = { id: response.id, textEditor: deskripsi };
			toast.success('Wisata berhasil ditambahkan');
			refreshData();
			setData([...data, newData]);
			setCreateVisible(false);
			setListVisible(true);
		} catch (error) {
			toast.error('Gagal menambahkan data');
			console.log(error);
		}
	};

	return (
		<div className='flex flex-col w-full justify-center items-center pt-4'>
			<h1 className='text-4xl font-semibold'>Tambah Wisata</h1>

			<form
				className='w-full mt-10 flex flex-col gap-4 px-32'
				onSubmit={handleSubmit}>
				<label
					htmlFor='gambar'
					className='font-semibold'>
					Upload Gambar
				</label>
				<input
					type='file'
					id='gambar'
					className='w-full py-2.5 px-4 border focus:outline-0'
					onChange={fileChangeHandler}
				/>

				<label
					htmlFor='nama'
					className='font-semibold'>
					Nama
				</label>
				<input
					type='text'
					id='nama'
					placeholder='Masukkan nama wisata'
					value={nama}
					onChange={(e) => setNama(e.target.value)}
					className='w-full py-2.5 px-4 border focus:outline-0'
				/>

				<label
					htmlFor='harga'
					className='font-semibold'>
					Harga
				</label>
				<input
					type='text'
					id='harga'
					placeholder='Masukkan harga tiket wisata'
					value={harga}
					onChange={(e) => setHarga(e.target.value)}
					className='w-full py-2.5 px-4 border focus:outline-0'
				/>

				<label
					htmlFor='kategori'
					className='font-semibold'>
					Kategori
				</label>
				<select
					name='category'
					id='category'
					className='w-full py-2.5 px-4 border focus:outline-0'
					value={kategori}
					onChange={(e) => setKategori(e.target.value)}>
					<option
						value=''
						disabled
						hidden>
						Pilih Kategori
					</option>
					<option value='agrowisata'>Agrowisata</option>
					<option value='bahari'>Bahari</option>
					<option value='kuliner'>Kuliner</option>
				</select>

				<label
					htmlFor='Deskripsi'
					className='font-semibold'>
					Deskripsi
				</label>
				<div className='flex gap-5 w-full'>
					<TextEditor
						deskripsi={deskripsi}
						setDeskripsi={setDeskripsi}
						data={data}
						setData={setData}
					/>
					<Result
						data={data}
						setData={setData}
					/>
				</div>

				<label
					htmlFor='alamat'
					className='font-semibold'>
					Alamat
				</label>
				<textarea
					type='text'
					id='alamat'
					placeholder='Masukkan alamat wisata'
					value={alamat}
					onChange={(e) => setAlamat(e.target.value)}
					className='w-full py-2.5 px-4 border focus:outline-0'
				/>

				<Leaflet />

				<div className='flex w-full justify-end mt-10 gap-4'>
					<button
						className='text-[#F7911A] bg-slate-100 font-semibold px-6 py-2 tracking-wide rounded-full border-2'
						onClick={handleNavigate}>
						Batal
					</button>
					<button
						className='bg-[#F7911A] text-slate-100 font-semibold px-6 py-2 tracking-wide rounded-full'
						type='submit'>
						Simpan
					</button>
				</div>
			</form>
		</div>
	);
}

export default TambahWisataSaya;
