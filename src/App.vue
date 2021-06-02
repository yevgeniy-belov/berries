<template>
	<div class="theme flex flex-1 flex-col " :class="`${theme}`">
		<select v-model="theme" name="theme" id="pet-select" class="text-black">
			<option value="">--Please choose an option--</option>
			<option value="theme-bright">Bright</option>
			<option value="theme-dark">Dark</option>
		</select>
    <div class="flex-grow flex-shrink">

		<router-view />
    </div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
	name: 'App',
	components: {
		HelloWorld,
	},
	data() {
		return {
			theme: '',
		};
	},
	mounted() {
		if (localStorage.theme) {
			this.theme = localStorage.theme;
		}
	},
	watch: {
		theme(newTheme) {
			localStorage.theme = newTheme;
		},
	},
});
</script>
