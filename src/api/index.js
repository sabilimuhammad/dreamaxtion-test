import Vue from 'vue';

async function getInventoryItems() {
	const response = await Vue.axios({
		url : 'v1/dreamaxtion/test',
		method : 'GET'
	});
	return response.data;
}

export default {
	getInventoryItems
};