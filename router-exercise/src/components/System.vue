<template>
    <v-container class="text-center">
        <v-card 
            outlined
            class="pa-4">

            <h1>Welcome {{ $route.query.username }}!</h1>
            <v-btn class="mt-4 primary" depressed @click="toUserList">Users List</v-btn>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        methods: {
            toUserList() {
                this.$router.push({
                    path: '/users',
                    query: {
                        username: this.$route.query.username
                    }
                })
            }
        }
    }
</script>