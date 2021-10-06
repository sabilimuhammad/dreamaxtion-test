<template>
	<div>
		<el-table v-for="data in tableData" :key="data.id" ref="filterTable" :data="tableData" style="width:100%" :row-class-name="tableRowClassName">
			<el-table-column
				prop="date"
				label="Date"
				width="180">
			</el-table-column>
			<el-table-column prop="name" label="Name" width="180"></el-table-column>
			<el-table-column prop="image" label="Image" width="180" :src="data.image">
			</el-table-column>
			<el-table-column
				prop="qty"
				label="Qty"
				width="100"
			> {{data.qty}}
			</el-table-column>
			<el-table-column
				prop="tag"
				label="Tag"
				width="100"
			> 
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
import InventoryItems from '../api/index.js'; 

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
		tableRowClassName({rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
    },
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
