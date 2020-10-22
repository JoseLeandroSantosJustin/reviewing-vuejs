<template>
    <v-container class="text-center">
        <v-card 
            outlined
            class="pa-4">

            <h1>Home</h1>

            <p>Any interesting content</p>

            <v-btn 
                color="primary"
                @click="toLogin">Login</v-btn>

            <v-btn
                class="ml-4" 
                disabled>Sign up</v-btn>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        methods: {
            toLogin() {
                this.$router.push({
                    path: '/login'
                })
            }
        }
    }
</script>