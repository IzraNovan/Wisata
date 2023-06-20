import { StateContext } from './context/StateContext';
import Navbar from './components/Navbar/Navbar';
import UnauthenticatedRoute from './routes/UnauthenticatedRoute';
import { Toaster } from 'react-hot-toast';
// import Footer from './components/Footer';

function App() {
	return (
		<StateContext>
			<Toaster />
			<div className='h-screen relative'>
				<Navbar />
				<UnauthenticatedRoute />
				{/* <Footer /> */}
			</div>
		</StateContext>
	);
}

export default App;
