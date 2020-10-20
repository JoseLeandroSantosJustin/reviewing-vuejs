import Vue from 'vue'

export default new Vue({
    methods: {
        setUser(user) {
            this.$emit('userSelected', user)
        },
        onSelectedUser(callback){
            this.$on('userSelected', callback)
        }
    }
})