/* eslint-disable react-hooks/exhaustive-deps */
import CariWisata from '../components/Dashboard/CariWisata';
import CariKategori from '../components/Dashboard/CariKategori';
import WisataList from '../components/Dashboard/WisataList';
import { useStateContext } from '../context/StateContext';
import { useEffect, useState } from 'react';
import { request } from '../utils/server';
import CardLoading from '../components/CardLoading';
import { useSearchParams } from 'react-router-dom';
import LoginPopup from '../components/Navbar/LoginPopup';

function Dashboard() {
	const { setWisata, loginModal } = useStateContext();
	const [loading, setLoading] = useState(true);
	const [searchParams, setSearchParams] = useSearchParams('');
	let searchName = searchParams.get('name') ?? '';
	let searchCategory = searchParams.get('category') ?? '';

	function handleSearch(value, searchType) {
		if (searchType === 'name') {
			setSearchParams({ name: value });
		} else if (searchType === 'category') {
			setSearchParams({ category: value });
		}
	}

	useEffect(() => {
		setSearchParams({ name: '', category: '' });
		searchName = '';
		searchCategory = '';

		if (searchName === '' && searchCategory === '') {
			const params = new URLSearchParams(window.location.search);
			params.delete('name');
			params.delete('category');
			setSearchParams(params);
		}
	}, []);

	useEffect(() => {
		const fetchWisata = async () => {
			try {
				const response = await request.get(
					`/tourist-object/tourist-object/
					${searchName !== '' ? `?search=${searchName}` : ''}
					${searchCategory !== '' ? `?category=${searchCategory}` : ''}`
				);
				setWisata(response.data.data);
				setLoading(false);
			} catch (error) {
				console.log(error.message);
			}
		};

		fetchWisata();
	}, [searchName, searchCategory]);

	return (
		<div className='flex flex-col w-full justify-center items-center pt-20'>
			<div className='flex flex-col justify-center items-center gap-5 text-slate-800'>
				<h1 className='text-5xl font-normal tracking-wide'>Wisata</h1>
				<hr className='w-24 border-2 border-orange-500 rounded-full' />
				<p>Temukan Wisata Menarik Disini</p>
			</div>
			<div className='flex pt-10 w-[60%] gap-4'>
				<CariWisata handleSearch={(value) => handleSearch(value, 'name')} />
				<CariKategori
					handleSearch={(value) => handleSearch(value, 'category')}
				/>
			</div>

			<div className='pt-10'>
				{loading ? (
					<>
						<div className='items-center h-screen'>
							<div className='w-full p-4'>
								<div className='flex gap-4'>
									<CardLoading />
									<CardLoading />
									<CardLoading />
								</div>
							</div>
						</div>
					</>
				) : (
					<WisataList
						searchName={searchName}
						searchCategory={searchCategory}
					/>
				)}
			</div>

			{loginModal && <LoginPopup />}
		</div>
	);
}

export default Dashboard;
