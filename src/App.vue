<template>
	<div class="theme flex flex-1 flex-col relative" :class="`${theme}`">
		<div class="fixed right-6 top-6 flex items-center">
			<div
				class="
					flex
					bg-content bg-a-weak
					relative
					py-2
					rounded-full
					text-strongest
				"
			>
				<div class="">
					<input type="radio" v-model="theme" id="huey" name="theme" value="theme-light" checked />
					<label class="" for="huey">Light</label>
				</div>
				<div class="">
					<input type="radio" v-model="theme" id="louie" name="theme" value="theme-dark-primary" />
					<label class="" for="louie">Dark</label>
				</div>
			</div>
		</div>
		<!--  -->
		<router-view />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'App',
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
