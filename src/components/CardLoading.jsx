const CardLoading = () => {
	return (
		<div className='flex flex-col bg-white rounded-xl p-4 pb-6 gap-3 w-[360px] h-[446px] overflow-hidden animate-pulse'>
			<div className='w-[320px] h-[192px] bg-slate-200 rounded-xl'></div>

			<div className='flex gap-5 items-center justify-between'>
				<div className='px-6 py-2 bg-slate-200 rounded-full w-16'></div>
				<div className='bg-slate-200 rounded-full h-4 w-16'></div>
			</div>

			<div className='flex flex-col gap-2'>
				<div className='rounded-full bg-slate-200 h-5 w-44'></div>
				<div className='rounded-full bg-slate-200 h-5 w-72'></div>
				<div className='rounded-full bg-slate-200 h-5 w-full'></div>
				<div className='rounded-full bg-slate-200 h-5 w-full'></div>
			</div>
		</div>
	);
};

export default CardLoading;
