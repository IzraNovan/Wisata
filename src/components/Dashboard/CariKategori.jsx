import { useState } from 'react';
import { BsFunnel } from 'react-icons/bs';

function CariKategori({ handleSearch }) {
	const [selectedCategory, setSelectedCategory] = useState('');

	const handleCategoryChange = (e) => {
		const category = e.target.value;
		setSelectedCategory(category);
		handleSearch(category);
	};

	return (
		<div className='relative grow h-[45px] border-2 bg-white text-gray-400 rounded-full overflow-hidden pr-4'>
			<BsFunnel className='absolute top-3 left-3 text-lg' />
			<select
				name='category'
				id='category'
				className={`flex pl-10 items-center justify-center h-full w-full focus:border-0 focus:outline-0 pr-2 ${
					selectedCategory ? '' : 'placeholder'
				}`}
				value={selectedCategory}
				onChange={handleCategoryChange}>
				<option
					value=''
					disabled
					hidden>
					Cari Kategori
				</option>
				<option value='agrowisata'>Agrowisata</option>
				<option value='bahari'>Bahari</option>
				<option value='kuliner'>Kuliner</option>
			</select>
		</div>
	);
}

export default CariKategori;
