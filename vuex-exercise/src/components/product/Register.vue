<template>
	<v-flex class="pa-4">
		<v-form>
			<h2>Register</h2>

			<v-flex md8>
				<v-text-field
					v-model="product.name"
					label="Product"></v-text-field>
			</v-flex>

			<v-flex md8>
				<v-text-field
					v-model="product.price"
					label="Price"></v-text-field>
			</v-flex>

			<v-flex md8 class="d-flex justify-end">
				<v-btn @click="addProduct">Add</v-btn>
			</v-flex>
		</v-form>
	</v-flex>
</template>

<script>
export default {
	data() {
		return {
			product: {
				name: '',
				price: ''
			}
		}
	},
	methods: {
		registerProduct(product) {
			this.$store.dispatch('product/registerProduct', product)
		},
		addProduct() {
			if(!isNaN(this.product.price)){
				this.registerProduct(this.product)
			}
		}
	}
};
</script>
