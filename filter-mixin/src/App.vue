<template>
	<div id="app">
		<h1>Filters & Mixins</h1>
		<h2>{{ value | noSpacesAndComma }}</h2>
		<h2>{{ value | letterCounter }}</h2>
		<input type="text" v-model="value" />
	</div>
</template>

<script>
import mixin from '@/mixins'

export default {
	data() {
		return {
			value: ''
		}
	},
	mixins: [ mixin ],
	filters: {
		noSpacesAndComma(value) {
			return value.replaceAll(' ', ',')
		}
	}
	
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
