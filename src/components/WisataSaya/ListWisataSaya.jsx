import { useState } from 'react';
import { BiEdit, BiTrash, BiDetail } from 'react-icons/bi';
import { formatPrice, handleCapitallize } from '../../utils/helper';
import { request } from '../../utils/server';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import CariWisata from '../Dashboard/CariWisata';
import Swal from 'sweetalert2';

const ListWisataSaya = ({
	data,
	handleSearch,
	setCreateVisible,
	setListVisible,
	setEditVisible,
	setDetailData,
	refreshData,
}) => {
	const navigate = useNavigate();
	const [itemsPerPage, setItemsPerPage] = useState(5);
	const [currentPage, setCurrentPage] = useState(1);

	const totalPages = Math.ceil(data.length / itemsPerPage);

	const handlePageChange = (page) => {
		Swal.fire({
			title: 'Are you sure?',
			text: 'Data akan dihapus secara permanent!',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#d33',
			cancelButtonColor: '#F7911A',
			confirmButtonText: 'Hapus',
		}).then((result) => {
			if (result.isConfirmed) {
				setCurrentPage(page);
				Swal.fire(
					'Berhasil Menghapus',
					'Datamu berhasil dihapus dari daftar',
					'success'
				);
			}
		});
	};

	const handleEdit = async (slug) => {
		try {
			const response = await request.get(
				`/tourist-object/tourist-object/${slug}/`
			);

			setDetailData(response.data);
			setListVisible(false);
			setEditVisible(true);
		} catch (error) {
			console.log(error);
		}
	};

	const handleDelete = async (slug) => {
		try {
			const response = await request.delete(
				`/tourist-object/tourist-object/${slug}/`
			);
			refreshData();
			toast.success('Data wisata telah berhasil dihapus');
		} catch (error) {
			console.log(error);
		}
	};

	const handleItemsPerPageChange = (e) => {
		setItemsPerPage(parseInt(e.target.value));
		setCurrentPage(1);
	};

	const handleNavigate = () => {
		setListVisible(false);
		setCreateVisible(true);
	};

	const slicedData = data.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	return (
		<div className='flex flex-col gap-6 px-20'>
			<div className='flex w-[60%] justify-end self-end gap-4'>
				<CariWisata handleSearch={handleSearch} />
				<button
					className='flex items-center gap-2 px-8 py-2 bg-orange-500 text-white rounded-full'
					onClick={handleNavigate}>
					<AiOutlinePlusCircle />
					<span>Tambah</span>
				</button>
			</div>

			<table className='w-full border-collapse'>
				<thead>
					<tr className='bg-gray-200'>
						<th className='py-2 px-4'>No</th>
						<th className='py-2 px-4'>Nama</th>
						<th className='py-2 px-4'>Harga</th>
						<th className='py-2 px-4'>Kategori</th>
						<th className='py-2 px-4'>Aksi</th>
					</tr>
				</thead>
				<tbody>
					{slicedData.map((item, index) => (
						<tr
							key={item.slug}
							className={index % 2 === 0 ? 'bg-gray-100' : ''}>
							<td className='py-4 px-4 border-b-4 text-center'>
								{(currentPage - 1) * itemsPerPage + index + 1}
							</td>
							<td className='py-4 px-4 border-b-4 text-center'>
								{handleCapitallize(item.name)}
							</td>
							<td className='py-4 px-4 border-b-4 text-center'>
								{formatPrice(item.price)}
							</td>
							<td className='py-4 px-4 border-b-4 text-center'>
								{handleCapitallize(item.category)}
							</td>
							<td className='py-4 px-4 border-b-4 text-center'>
								<div className='flex gap-4 w-full justify-center items-center'>
									<button
										className='text-blue-500 hover:text-blue-700'
										title='Edit'
										onClick={() => navigate(`/wisata/${item.slug}`)}>
										<BiDetail className='text-2xl' />
									</button>
									<button
										className='text-red-500 hover:text-red-700'
										title='Delete'
										onClick={() => handleDelete(item.slug)}>
										<BiTrash className='text-2xl' />
									</button>
									<button
										className='text-green-500 hover:text-green-700'
										title='Detail'
										onClick={() => handleEdit(item.slug)}>
										<BiEdit className='text-2xl' />
									</button>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<div className='flex justify-between mt-4 px-16'>
				<div className='flex gap-4 items-center'>
					<select
						id='itemsPerPage'
						className='border bg-orange-500 text-white font-medium rounded-md py-2 px-2'
						value={itemsPerPage}
						onChange={handleItemsPerPageChange}>
						<option value='5'>5</option>
						<option value='10'>10</option>
						<option value='20'>20</option>
					</select>
					<label
						htmlFor='itemsPerPage'
						className='mr-2 text-slate-500'>
						Tampilkan per halaman
					</label>
				</div>
				<div>
					{totalPages > 1 && (
						<div className='flex'>
							{Array.from({ length: totalPages }, (_, i) => i + 1).map(
								(page) => (
									<button
										key={page}
										className={`mx-1 w-10 py-1 rounded ${
											currentPage === page
												? 'bg-blue-500 text-white'
												: 'bg-gray-200'
										}`}
										onClick={() => handlePageChange(page)}>
										{page}
									</button>
								)
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ListWisataSaya;
