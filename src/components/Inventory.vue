<template>
	<div class="container">
		<h1>DREAMAXTION TABLE INVENTORY</h1>
		<el-table ref="filterTable" :data="tableData" style="width:100%">
			<el-table-column
				prop="createdAt"
				label="Date">
			</el-table-column>
			<el-table-column prop="name" label="Name"></el-table-column>
			<el-table-column prop="avatar" label="Image">
			</el-table-column>
			<el-table-column
				prop="qty"
				label="Qty"
				width="180"
			>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
import InventoryItems from '@/api/index.js'; 

export default {
	data() {
		return {
			tableData: []
		}
	},
	created() {
		this.getInventoryItems();
	},
	methods: {
		async getInventoryItems() {
			try{
				const response = await InventoryItems.getInventoryItems();
				this.tableData = response.data;
			} catch(e) {
				console.log('error', e)
			}
		}
	}
};
</script>
