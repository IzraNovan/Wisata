import { Route, Routes } from 'react-router-dom';
import { useStateContext } from '../context/StateContext';
import AuthenticatedRoute from '../routes/AuthenticatedRoute';
import Dashboard from '../pages/Dashboard';
import DetailWisata from '../pages/DetailWisata';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

function UnauthenticatedRoute() {
	const { authenticated, setAuthenticated } = useStateContext();

	const access = Cookies.get('access');
	useEffect(() => {
		if (access && access !== '') {
			setAuthenticated(true);
		} else {
			setAuthenticated(false);
		}
	}, [access, setAuthenticated]);

	return (
		<Routes>
			<Route
				path='/'
				element={<Dashboard />}
			/>
			{authenticated && (
				<Route
					path='/*'
					element={<AuthenticatedRoute />}
				/>
			)}
			<Route
				path='/wisata/:slug'
				element={<DetailWisata />}
			/>
		</Routes>
	);
}

export default UnauthenticatedRoute;
