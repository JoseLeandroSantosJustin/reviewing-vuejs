import Vue from 'vue'

export default new Vue({
    methods: {
        // Form event
        onLoadUser(callback){
            this.$on('loadInTheForm', callback)
        },
        updateUsersList() {
            this.$emit('updateUsersList')
        },

        // List event
        loadUser(user) {
            this.$emit('loadInTheForm', user)
        },
        onUpdateUsersList(callback) {
            this.$on('updateUsersList', callback);
        }
    }
})