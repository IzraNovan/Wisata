import { useStateContext } from '../../context/StateContext';
import WisataCard from './WisataCard';

function WisataList({ searchName, searchCategory }) {
	const { wisata } = useStateContext();

	const filteredWisata = wisata.filter((tour) => {
		const isNameMatch = tour.name
			.toLowerCase()
			.includes(searchName.toLowerCase());
		const isCategoryMatch = tour.category
			.toLowerCase()
			.includes(searchCategory.toLowerCase());
		return isNameMatch && isCategoryMatch;
	});

	const filtered = filteredWisata.map((tour) => (
		<WisataCard
			key={tour.slug}
			{...tour}
			tour={tour}
		/>
	));

	return (
		<div className='p-4 grid grid-cols-3 grid-flow-row gap-4'>{filtered}</div>
	);
}

export default WisataList;
