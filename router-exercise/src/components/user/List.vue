<template>
    <v-container>
        <v-card tile>
            <v-list>
                <v-subheader>Users</v-subheader>

                <v-list-item-group>
                    <v-list-item v-for="(user, i) in users" :key="i" @click="toProfile(user)">

                        <v-list-item-icon>
                            <v-icon v-text="'mdi-account'"></v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title v-text="user.name"></v-list-item-title>
                        </v-list-item-content>

                    </v-list-item>
                </v-list-item-group>
            </v-list>
            <v-col class="text-right">
                <v-btn class="primary" @click="toSystem">Back</v-btn>
            </v-col>
        </v-card>
        <router-view class="mt-16"/>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            users: [
                { id: 1, name: 'Jhon' },
                { id: 2, name: 'Alfred' },
                { id: 3, name: 'Morgana' }
            ]
        }
    },
    methods: {
        toSystem() {
            this.$router.push({
                path: '/system',
                query: { 
                    username: this.$route.query.username
                }
            })
        },
        toProfile(user) {
            this.$router.push({
                path: `/users/${user.id}/profile`,
                param: { user },
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