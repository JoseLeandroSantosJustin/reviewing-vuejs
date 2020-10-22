<template>
    <v-card tile>
        <v-card-title>User</v-card-title>
        <v-card-text>ID: {{ id }}</v-card-text>
    </v-card>
</template>

<script>
export default {
    props: ['id'],
    methods: {
        toList() {
            this.$router.push({
                path: `/users`,
                query: {
                    username: this.$route.query.username
                }
            })
        }
    },
    beforeRouteEnter(to, from, next) {
        if(
            to.query.username != null &&
            to.query.username != undefined
        ){
            next()
        }else{
            next('/login?notAuthenticate=true')
        }
    }
}
</script>