import React, { useState } from 'react';
import { SlMagnifier } from 'react-icons/sl';

function CariWisata({ handleSearch }) {
	const [search, setSearch] = useState('');

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	const handleSubmit = () => {
		handleSearch(search.toLowerCase());
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			handleSubmit();
		}
	};

	return (
		<div className='relative grow h-[45px] border-2 bg-white text-gray-400 rounded-full overflow-hidden'>
			<SlMagnifier className='absolute top-3 left-3' />
			<input
				type='text'
				placeholder='Cari Wisata'
				className='flex pl-10 items-center justify-center h-full w-full focus:border-0 focus:outline-0'
				spellCheck='false'
				value={search}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
			/>
			<button
				className='absolute right-0 top-0 rounded-full px-8 bg-orange-500 h-full text-white'
				onClick={handleSubmit}>
				Cari
			</button>
		</div>
	);
}

export default CariWisata;
