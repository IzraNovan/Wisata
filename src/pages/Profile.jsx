import ProfileMenu from '../components/ProfileSaya/ProfileMenu';
import ProfileSaya from '../components/ProfileSaya/ProfileSaya';
import WisataSaya from '../components/WisataSaya/WisataSaya';
import { useState } from 'react';

function Profile() {
	const [page, setPage] = useState(false);

	return (
		<div className='flex pt-16 gap-8'>
			<ProfileMenu setPage={setPage} />
			{page ? <WisataSaya /> : <ProfileSaya />}
		</div>
	);
}

export default Profile;
