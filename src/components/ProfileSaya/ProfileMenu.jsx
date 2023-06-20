function ProfileMenu({ setPage }) {
	return (
		<div className='h-auto w-[400px]'>
			<ul className='flex flex-col items-end font-medium text-lg'>
				<li
					className='px-4 py-2 flex w-1/2 hover:text-orange-500'
					onClick={() => setPage(false)}>
					Profil
				</li>
				<li
					className='px-4 py-2 flex w-1/2 hover:text-orange-500'
					onClick={() => setPage(true)}>
					Wisata Saya
				</li>
			</ul>
		</div>
	);
}

export default ProfileMenu;
