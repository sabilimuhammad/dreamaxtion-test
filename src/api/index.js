import Vue from 'vue';

const InventoryItems = 'datas';

async function getInventoryItems() {
	const response = await Vue.axios({
		url : InventoryItems,
		method : 'GET'
	});
	return response.data;
}

export default getInventoryItems;