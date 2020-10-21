<template>
	<div>
        <h1>User form</h1>
        <b-form>
            <b-form-group
                label="Name:"
                label-for="name">
                <b-form-input
                    id="name"
                    type="text"
                    placeholder="Enter name"
                    v-model="user.name"
                ></b-form-input>
            </b-form-group>

            <b-form-group
                label="Email address:"
                label-for="email"
                description="We'll never share your email with anyone else.">
                <b-form-input
                    id="email"
                    type="email"
                    placeholder="Enter email"
                    v-model="user.email">
                </b-form-input>
            </b-form-group>

            <b-button @click="clear" variant="warning">Clear</b-button> <b-button @click="postUser" variant="success">Save</b-button>
        </b-form>
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
			}
		};
	},
	created() {
        userBus.onLoadUser(user => {
            this.user.id = user.id
            this.user.name = user.name
            this.user.email = user.email
        })
	},
	methods: {
		clear() {
			this.user = {
				id: null,
				name: '',
				email: ''
			}
		},
		postUser() {
			this.$http.post(
				"/users",
				{
                    id: this.user.id,
                    name: this.user.name,
                    email: this.user.email.toLowerCase()
                }
			).then((response) => {
                this.users = response.data
                this.clear()
                this.updateUsersList()
            });
        },
        updateUsersList() {
            userBus.updateUsersList()
        }
	},
};
</script>