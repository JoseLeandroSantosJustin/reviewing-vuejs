<template>
    <table class="user-list">
        <thead>
            <tr>                
                <th>#ID</th>
                <th>#Name</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.id" @click="userSelected(user)">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import eventBus from '@/eventBus'

export default {
    data(){
        return {
            users: [
                { id: 1, name: 'Ana', age: 41 },
                { id: 2, name: 'Jose', age: 26 },
                { id: 3, name: 'Maria', age: 61 },
                { id: 4, name: 'Eduardo', age: 35 },
                { id: 5, name: 'Alencar', age: 67 }
            ]
        }
    },
    methods: {
        userSelected(user){
            eventBus.setUser(user)
        }
    }
}
</script>

<style scoped>
    .usuario-lista {
        display: flex;
    }

    table {
        flex: 0.5;
        border-spacing: 0px;
        border-collapse: separate;
        border-top: 1px solid #CCC;
    }

    th, td {
        padding: 15px;
        border-bottom: 1px solid #CCC;
    }

    tbody tr:hover {
        background: rgba(0, 0, 0, 0.1);
    }
</style>