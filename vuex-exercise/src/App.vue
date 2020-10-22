<template>
	<v-app>
		<Navbar />
		<v-container class="mt-16">
			<v-layout row>
				<ProductRegister />
				<ProductList />
			</v-layout>
			<v-layout align-center>
				<Cart />
			</v-layout>
		</v-container>
	</v-app>
</template>

<script>
import Navbar from '@/components/navbar/Navbar'
import ProductRegister from '@/components/product/Register'
import ProductList from '@/components/product/List'
import Cart from '@/components/cart/Cart'

export default {
	components: {
		Navbar,
		ProductRegister,
		ProductList,
		Cart
	}
};
</script>
