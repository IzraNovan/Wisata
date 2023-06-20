import ListWisataSaya from './ListWisataSaya';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { request } from '../../utils/server';
import Animaload from '../Animaload';
import TambahWisataSaya from './TambahWisataSaya';
import UbahWisataSaya from './UbahWisataSaya';

function WisataSaya() {
	const [searchParams, setSearchParams] = useSearchParams('');
	const [data, setData] = useState([]);
	const [detailData, setDetailData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [listVisible, setListVisible] = useState(true);
	const [createVisible, setCreateVisible] = useState(false);
	const [editVisible, setEditVisible] = useState(false);
	let searchName = searchParams.get('name') ?? '';

	function handleSearch(value) {
		setSearchParams({ name: value });
	}

	useEffect(() => {
		setSearchParams({ name: '' });
		searchName = '';

		if (searchName === '') {
			const params = new URLSearchParams(window.location.search);
			params.delete('name');
			setSearchParams(params);
		}
	}, []);

	const fetchMyWisata = async () => {
		try {
			const response = await request.get(
				`/tourist-object/tourist-object/me/${
					searchName !== '' ? `?search=${searchName}` : ''
				}`
			);
			setData(response.data.data);
			setLoading(false);
		} catch (error) {
			console.log(error.message);
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchMyWisata();
	}, [searchParams]);

	if (loading) {
		<Animaload />;
	}

	return (
		<div className='flex flex-col w-full h-[50vh] items-center px-8 gap-10'>
			<div className='w-full'>
				{listVisible && (
					<ListWisataSaya
						data={data}
						setDetailData={setDetailData}
						handleSearch={handleSearch}
						setCreateVisible={setCreateVisible}
						setEditVisible={setEditVisible}
						setListVisible={setListVisible}
						refreshData={fetchMyWisata}
					/>
				)}
				{createVisible && (
					<TambahWisataSaya
						data={data}
						setCreateVisible={setCreateVisible}
						setListVisible={setListVisible}
						refreshData={fetchMyWisata}
					/>
				)}
				{editVisible && (
					<UbahWisataSaya
						data={detailData}
						setEditVisible={setEditVisible}
						setListVisible={setListVisible}
						refreshData={fetchMyWisata}
					/>
				)}
			</div>
		</div>
	);
}

export default WisataSaya;
