<template>
	<div id="app">
		<div class="conteudo">
			<div class="painel" v-if="!wasSent">
				<div class="cabecalho">Form</div>
				<FullName v-model="fullname" />

				<Label :name="'Email'">
					<input type="text" v-model="email">
				</Label>

				<Label :name="'Password'">
					<input type="password" v-model="password">
				</Label>

				<Label :name="'Save Data'" :class="'saveDate'">
					<label for="saveData">Yes</label>
					<input type="checkbox" id="saveData" v-model="saveData">
				</Label>

				<button @click="wasSent = !wasSent">Submit</button>
			</div>
			<div class="painel" v-else>
				<div class="cabecalho">Result</div>
				<Label :name="'First Name'">
					{{ fullname.firstName }}
				</Label>

				<Label :name="'Last Name'">
					{{ fullname.lastName }}
				</Label>

				<Label :name="'Email'">
					{{ email }}
				</Label>

				<Label :name="'Password'">
					{{ password }}
				</Label>

				<Label :name="'Save Data'">
					{{ saveData }}
				</Label>
			</div>
		</div>
	</div>
</template>

<script>
import Label from './components/Label.vue'
import FullName from './components/FullName.vue'

export default {
	name: 'app',
	components: { 
		Label,
		FullName
	},
	data() {
		return {
			fullname: {
				firstName: '',
				lastName: '',
			},
			email: '',
			password: '',
			saveData: false,
			wasSent: false
		}
	},
	methods: {
		firstNameWasChanged(firstName) {
			this.fullname.firstName = firstName
        },
        lastNameWasChanged(lastName) {
            this.fullname.lastName = lastName
        }
	}
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app div button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
