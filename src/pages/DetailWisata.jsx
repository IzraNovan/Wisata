import money from '../assets/Logo/money.png';
import phone from '../assets/Logo/phone.png';
import fb from '../assets/Logo/fb.png';
import wa from '../assets/Logo/wa.png';
import tele from '../assets/Logo/tele.png';
import pint from '../assets/Logo/pint.png';
import tw from '../assets/Logo/tweet.png';
import { useEffect, useState } from 'react';
import { request } from '../utils/server';
import { useParams } from 'react-router-dom';
import Animaload from '../components/Animaload';
import {
	formatPrice,
	formatTimestamp,
	handleCapitallize,
	parseHTMLString,
} from '../utils/helper';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

function WisataDetail() {
	const { slug } = useParams();
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [latitude, setLatitude] = useState('');
	const [longitude, setLongitude] = useState('');

	useEffect(() => {
		const getDetailWisata = async () => {
			try {
				const response = await request.get(
					`/tourist-object/tourist-object/${slug}`
				);
				setData(response.data);
				setLatitude(response.data.location.coordinates[0]);
				setLongitude(response.data.location.coordinates[1]);
				setLoading(false);
			} catch (error) {
				setLoading(false);
			}
		};

		getDetailWisata();
	}, []);

	if (loading) return <Animaload />;

	return (
		<div className='flex flex-col w-full items-center pt-20 pb-10'>
			<div className='flex flex-col gap-8 items-center'>
				<h1 className='text-4xl font-semibold'>{data?.name}</h1>
				<hr className='border-4 border-orange-500 w-32 rounded-full' />
				<img
					src={data?.image}
					alt='tourImg'
					className='rounded-lg'
				/>
			</div>

			<div className='flex flex-col mt-8 items-center w-full '>
				<div className='flex gap-6 w-[45%] px-4'>
					<img
						src={data?.image}
						alt='alt'
						className='w-16 rounded-full'
					/>

					<div className='flex flex-col justify-center gap-2'>
						<h1 className='flex text-2xl font-medium items-center gap-6'>
							{data?.name}
							<span className='px-4 py-1 mx-auto bg-orange-500/20 text-sm rounded-full text-orange-600'>
								{handleCapitallize(data?.category)}
							</span>
						</h1>
						<p>Diposting pada {formatTimestamp(data?.created)}</p>
					</div>
				</div>

				<article className='mt-10 w-1/2 px-4'>
					{parseHTMLString(data?.description)?.body?.textContent}
				</article>

				<div className='flex mt-16 gap-8 w-1/2'>
					<div className='flex py-6 px-4 w-[400px] bg-white gap-4 rounded-2xl'>
						<img
							src={money}
							alt=''
						/>

						<div className='flex flex-col justify-center'>
							<p>Harga</p>
							<h4 className='font-medium'>{formatPrice(data?.price)}</h4>
						</div>
					</div>

					<div className='flex py-6 px-4 w-[400px] bg-white gap-4 rounded-2xl'>
						<img
							src={phone}
							alt=''
						/>

						<div className='flex flex-col justify-center'>
							<p>No. Telpon</p>
							<h4 className='font-medium'>0895103723237</h4>
						</div>
					</div>
				</div>

				<div className='flex flex-col justify-center w-1/2 gap-4 mt-10'>
					<p className='font-medium text-lg'>Share wisata ini</p>

					<div className='flex gap-4'>
						<img
							src={fb}
							alt='fb'
							className='w-10'
						/>
						<img
							src={wa}
							alt='wa'
							className='w-10'
						/>
						<img
							src={tele}
							alt='tele'
							className='w-10'
						/>
						<img
							src={pint}
							alt='pint'
							className='w-10'
						/>
						<img
							src={tw}
							alt='tw'
							className='w-10'
						/>
					</div>
				</div>

				<div className='shadow bg-white rounded-lg w-1/2 mt-10'>
					<MapContainer
						center={[-7.8672, 110.3506]}
						zoom={10}
						scrollWheelZoom={false}
						className='w-full h-[30vh]'>
						<TileLayer
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
						/>
						<Marker position={[-7.8672, 110.3506]}>
							<Popup>
								A pretty CSS3 popup. <br /> Easily customizable.
							</Popup>
						</Marker>
					</MapContainer>
				</div>
			</div>
		</div>
	);
}

export default WisataDetail;
