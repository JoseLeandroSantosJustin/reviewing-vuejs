<template>
    <div>
        <Label name="First Name">
            <input type="text" :value="value.firstName" @keyup="firstNameWasChanged($event)"/>
        </Label>

        <Label name="Last Name">
            <input type="text" :value="value.lastName" @keyup="lastNameWasChanged($event)"/>
        </Label>
    </div>
</template>

<script>
import Label from './Label.vue'

export default {
    props: {
        value: {
            type: Object,
            required: true
        }
    },
    components: {
        Label
    },
    methods: {
        firstNameWasChanged(event) {
            this.$emit('input', {
                firstName: event.target.value,
                lastName: this.value.lastName
            })
        },
        lastNameWasChanged(event) {
            this.$emit('input', {
                firstName: this.value.firstName,
                lastName: event.target.value
            })
        }
    }
}
</script>