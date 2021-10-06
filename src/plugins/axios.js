import axios from 'axios';
import VueAxios from 'vue-axios';

const axiosPlugin = {
	install(Vue) {
		const axiosInstance = axios.create({
			baseURL: 'https://615c2450c298130017735f62.mockapi.io/api/v1/inventory/test',
			timeout: 8000,
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		});
		Vue.use(VueAxios, axiosInstance);
	},
};

export default axiosPlugin;