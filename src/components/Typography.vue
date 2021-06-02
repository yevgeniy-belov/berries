<template>
	<div class="grid auto-rows-max bg-canvas p-12" :class="`grid-cols-${ssot.typography.intensity.list.length}`">
		<template v-for="(size, index) in ssot.typography.sizes.list" :key="index">
			<template v-for="(intensity, index) in ssot.typography.intensity.list" :key="index">
				<div class="" :class="`text-${size.name} text-${intensity.name}`"> {{ size.name }}: Sphynx </div>
			</template>
		</template>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ssot from '../SSOT.json';
export default defineComponent({
	data() {
		return {
			ssot: ssot,
		};
	},
	computed: {},
});
</script>
