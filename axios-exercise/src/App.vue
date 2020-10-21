<template>
	<div id="app">
		<b-alert :show="checkingDatabase" variant="warning">Checking database(json-server) connection</b-alert>
		<b-alert :show="databaseError" variant="danger">Database is not running. Please run "node_modules/json-server/lib/cli/bin.js --watch db.json" inside the project directory in the terminal</b-alert>
		<b-card v-if="!checkingDatabase && !databaseError">
			<UserForm />
			<UserList />
		</b-card>
	</div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'
import UserList from '@/components/UserList.vue'

export default {
	name: "App",
	components: {
		UserForm,
		UserList
	},
	data() {
		return {
			checkingDatabase: true,
			databaseError: false
		}
	},
	beforeCreate(){
		setTimeout(() => {
			this.$http.get().then(
				() => this.checkingDatabase = false
			).catch(
				() =>  {
					this.checkingDatabase = false
					this.databaseError = true
				}
			)
		}, 1000)
	},
};
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		font-size: 1.5rem;
		margin: 50px;
	}

	#app h1 {
		text-align: center;
	}
</style>
