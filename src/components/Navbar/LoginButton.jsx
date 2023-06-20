function LoginButton({ onLoginSuccess }) {
	return (
		<button
			className='bg-[#F7911A] text-slate-100 font-semibold px-6 py-2 tracking-wide rounded-full'
			onClick={onLoginSuccess}>
			Login
		</button>
	);
}

export default LoginButton;
