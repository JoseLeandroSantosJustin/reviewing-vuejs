<template>
	<div>
        <h1>Users list</h1>
        <b-list-group>
            <b-list-group-item v-for="user in users" :key="user.id">
                <strong>ID:</strong> {{ user.id }} <br>
                <strong>Nome:</strong> {{ user.name }} <br>
                <strong>Email:</strong> {{ user.email }} <br><br>
                <b-button @click="loadInTheForm(user)" variant="primary">Load in the form</b-button> <b-button @click="deleteUser(user)" variant="danger">Delete</b-button>
            </b-list-group-item>
        </b-list-group>
	</div>
</template>

<script>
import userBus from './userBus';

export default {
	data() {
		return {
			user: {
				id: null,
				name: '',
				email: ''
			},
			users: []
		};
	},
	created() {
        userBus.onUpdateUsersList(() => {
            this.getUsers();
        });

		this.getUsers();
	},
	methods: {
		getUsers() {
			this.$http.get("/users").then((response) => {
				this.users = response.data;
			});
		},
		loadInTheForm(user) {
            userBus.loadUser(user);
		},
		deleteUser(user) {
			this.$http.delete(`/users/${user.id}`).then(() => {
				this.getUsers()
			});
		}
	},
};
</script>
