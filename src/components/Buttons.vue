<template>
	<div class="flex space-x-4 h-1 flex-1 items-center justify-center">
		<div class="m-10 border p-10 border-strongest">
			<button type="button" class="btn">Default</button>
			<button type="button" class="btn btn--primary">Primary</button>
			<button
				type="button"
				class="btn"
				disabled
				title="You dont have sufficient permissions to execute this command."
				>Disabled</button
			>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ssot from '../SSOT.json';
export default defineComponent({
	data() {
		return {
			ssot: ssot,
			cases: ['btn'],
		};
	},
	computed: {},
});
</script>
