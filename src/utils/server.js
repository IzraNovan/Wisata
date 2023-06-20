import axios from 'axios';
import Cookies from 'js-cookie';

export const request = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
	timeout: 100000,
});

request.interceptors.request.use((config) => {
	if (!config.headers) {
		config.headers = {};
	}

	const token = Cookies.get('access');

	if (token) {
		config.headers['Authorization'] = `Bearer ${token}`;
		// config.headers['Content-Type'] = 'application/json';
	}

	return config;
});

request.interceptors.response.use(
	(response) => {
		return response;
	},
	async (error) => {
		const originalRequest = error.config;
		const refreshToken = Cookies.get('refreshToken');

		if (
			error.response.status === 401 &&
			!originalRequest._retry &&
			refreshToken
		) {
			originalRequest._retry = true;
			try {
				const response = await request.post('/auth/refresh', {
					refreshToken,
				});
				const token = response.data.refresh;
				Cookies.set('token', token);
				return request(originalRequest);
			} catch (error) {
				console.log('Failed to refresh token:', error);
			}
		}

		return Promise.reject(error);
	}
);
