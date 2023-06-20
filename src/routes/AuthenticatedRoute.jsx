import { Route, Routes } from 'react-router-dom';
import Profile from '../pages/Profile';
import UbahPassword from '../pages/UbahPassword';

function AuthenticatedRoute() {
	return (
		<Routes>
			<Route
				path='/profile'
				element={<Profile />}
			/>
			<Route
				path='/ubahpassword'
				element={<UbahPassword />}
			/>
		</Routes>
	);
}

export default AuthenticatedRoute;
