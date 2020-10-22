<template>
	<v-flex class="pa-4">
		<v-flex>
			<h2>Store</h2>
		</v-flex>

		<v-flex>
			<v-simple-table 
				fixed-header
				height="200px">
					<thead>
						<tr>
							<th class="text-left">Name</th>
							<th class="text-left">Price</th>
						</tr>
					</thead>

					<tbody>
						<tr v-for="(product, key) in products" :key="key" @click="addToCart(product)">
							<td>{{ product.name }}</td>
							<td>{{ product.price }}</td>
						</tr>
					</tbody>
			</v-simple-table>
		</v-flex>
	</v-flex>
</template>

<script>
export default {
	computed: {
		products() {
			return this.$store.getters['product/getProducts']
		}
	},
	methods: {
		addToCart(product) {
			this.$store.dispatch('cart/addToCart', product)
		}
	}
};
</script>
