<template>
    <v-container>
        <v-form
            class="pa-16"
            ref="form">

            <v-alert v-if="this.$route.query.notAuthenticate"
                border="top"
                color="red lighten-1"
                dark>
                    Authentication is required to access the system: P
            </v-alert>

            <v-text-field
                v-model="user.username"
                label="User"
                :error-messages="usernameError"
                required></v-text-field>

            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-bind="attrs"
                        v-on="on"
                        v-model="user.password"
                        :error-messages="emailError"
                        type="password"
                        label="Password"
                        required></v-text-field>
                </template>
                <span>DO NOT USE A REAL PASSWORD</span>
            </v-tooltip>

            <v-col class="text-right">
                <v-btn @click="validate" color="primary" depressed>Log In</v-btn>
            </v-col>
        </v-form>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            usernameError: '',
            emailError: '',
            user: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        validate () {
            this.clearErros()
            if(this.user.username === ''){
                this.usernameError = 'Enter username'
            }

            if(this.user.password === ''){
                this.emailError = 'Enter password'
            }

            if(
                this.user.username !== '' &&
                this.user.password !== ''
            ){
                this.logIn()
            }
        },
        clearErros() {
            this.usernameError = ''
            this.emailError = ''
        },
        logIn() {
            this.$router.push({
                path: `/system`,
                query: { 
                    username: this.user.username
                }
            })
        }
    }
}
</script>