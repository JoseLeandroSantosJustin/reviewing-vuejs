<template>
	<v-flex class="pa-4">
		<v-layout row>
			<v-flex>
				<h2>Cart</h2>
			</v-flex>
		</v-layout>

		<v-layout row>
			<v-flex>
				<v-simple-table 
					fixed-header
					height="300px">
						<thead>
							<tr>
								<th class="text-left">Name</th>
								<th class="text-left">Price</th>
							</tr>
						</thead>

						<tbody>
							<tr v-for="(product, key) in cart" :key="key">
								<td>{{ product.name }}</td>
								<td>{{ product.price }}</td>
							</tr>
						</tbody>

						<tfoot>
							<tr>
								<th 
									colspan="2" 
									style="text-align: right; font-size: 18px;">
									Total {{ total }}
								</th>
							</tr>
						</tfoot>
				</v-simple-table>
			</v-flex>
		</v-layout>
	</v-flex>
</template>

<script>
export default {
	data() {
		return {
			total: 0
		}
	},
	computed: {
		cart() {
			return this.$store.getters['cart/getCart']
		}
	},
	watch: {
		cart() {
			const products = this.$store.getters['cart/getCart']
			let total = 0

			products.forEach(product => {
				total += Math.round((product.price + Number.EPSILON) * 100) / 100;
			});

			this.total = total
		}
	}
};
</script>

<style scoped>
	.v-data-table table tfoot th
	{
		border-top: 1px;
		position: sticky;
		bottom: 0;
		background: #FFF;
		color: rgba(0, 0, 0, 0.6);
		box-shadow: inset 0 1px rgba(0, 0, 0, 0.12);
	}
</style>