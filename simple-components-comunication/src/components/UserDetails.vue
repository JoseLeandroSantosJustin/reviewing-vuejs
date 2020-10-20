<template>
    <h2 v-if="!user">Please select an user!</h2>
    <div class="user-details" v-else>
        <h2>ID: {{ user.id }}</h2>
        <h2>Name: {{ user.name }}</h2>
        <h2>Age: {{ user.age }}</h2>
    </div>
</template>

<script>
import eventBus from '@/eventBus'

export default {
    data() {
        return {
            user: null
        }
    },
    created() {
        eventBus.onSelectedUser(user => {
            this.user = user
        })
    }
}
</script>

<style scoped>
    .user-details {
        flex: 1;
        border: 1px solid #CCC;
    }
</style>