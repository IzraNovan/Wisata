import { createContext, useContext, useState } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
	const [wisata, setWisata] = useState([]);
	const [myWisata, setMyWisata] = useState([]);
	const [loginModal, setLoginModal] = useState(false);
	const [authenticated, setAuthenticated] = useState(false);
	const [profile, setProfile] = useState([]);

	return (
		<Context.Provider
			value={{
				wisata,
				setWisata,
				myWisata,
				setMyWisata,
				loginModal,
				setLoginModal,
				authenticated,
				setAuthenticated,
				profile,
				setProfile,
			}}>
			{children}
		</Context.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useStateContext = () => useContext(Context);
