// eslint-disable-next-line react/prop-types
import { Link } from 'react-router-dom';
import { formatPrice, handleCapitallize } from '../../utils/helper';

// eslint-disable-next-line react/prop-types
function WisataCard({ slug, image, category, price, description, name }) {
	const parser = new DOMParser();
	const htmlString = description;
	const parsedHTML = parser.parseFromString(htmlString, 'text/html');
	const desc = parsedHTML.body.textContent;

	return (
		<div className='flex flex-col bg-white rounded-xl p-4 pb-6 gap-3 w-[360px] h-[446px] overflow-hidden'>
			<img
				src={image}
				alt='wisataimg'
				className='w-[320px] h-[192px] bg-cover rounded-xl'
			/>

			<div className='flex gap-5 items-center justify-between h-auto'>
				<div className='px-6 py-2 bg-[#f8cfa0] text-orange-600 font-semibold rounded-full'>
					<span className='z-10'>{handleCapitallize(category)}</span>
				</div>
				<span className='font-medium'>{formatPrice(price)}</span>
			</div>

			<article className='flex flex-col gap-2'>
				<Link to={`/wisata/${slug}`}>
					<h1 className='font-semibold text-lg'>{handleCapitallize(name)}</h1>
				</Link>
				<p>{handleCapitallize(desc).slice(0, 160)}</p>
			</article>
		</div>
	);
}

export default WisataCard;
