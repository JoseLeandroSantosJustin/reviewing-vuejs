<template>
	<div id="app">
		<v-app>
			<v-app-bar absolute>
				<v-toolbar class="pl-0">
					<v-toolbar-title class="ml-3">Vuetify test</v-toolbar-title>

					<v-spacer></v-spacer>

					<router-link class="mr-3" to="/">
						<v-btn color="white" depressed>Home</v-btn>
					</router-link>

					<router-link class="mr-3" to="/login">
						<v-btn color="white" depressed>login</v-btn>
					</router-link>

					<router-link class="mr-3" to="/about">
						<v-btn color="white" depressed>About</v-btn>
					</router-link>
				</v-toolbar>
			</v-app-bar>
			<router-view class="mt-16"/>
		</v-app>
	</div>
</template>

<script>
export default {
}
</script>

<style scoped>
	button span a{
		color: inherit;
		text-decoration: none;
	}

	/deep/ .v-toolbar__content { /* @ignore */
	padding: 0px !important;
	}

</style>