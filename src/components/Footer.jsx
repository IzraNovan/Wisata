import logoSandbox from '../assets/Logo/logosandbox.png';

function Footer() {
	return (
		<div className='h-[100px] bg-[#2B2C2B] flex flex-col px-20 w-full py-8 justify-center gap-4 inset-x-0 mt-[3.38rem]'>
			<img
				src={logoSandbox}
				alt='logosandbox'
				className='w-32'
			/>
			<hr />
		</div>
	);
}

export default Footer;
