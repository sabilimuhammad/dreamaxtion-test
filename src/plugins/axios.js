import axios from 'axios';
import VueAxios from 'vue-axios';

const axiosPlugin = {
	install(Vue) {
		const axiosInstance = axios.create({
			baseURL: `${process.env.VUE_APP_BASE_URL}`,
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