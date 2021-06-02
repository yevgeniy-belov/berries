<template>
	<div class="absolute bg-aside top-0 bottom-0 right-0 left-0">
		<div class="grid auto-rows-max gap-1 m-5 p-4" :class="`grid-cols-${ssot.shadows.sizes.list.length}`">
				<template v-for="(intensity, index) in ssot.shadows.intensity.list" :key="index">
			<template v-for="(size, index) in ssot.shadows.sizes.list" :key="index">
					<div
						class="p-5 m-3 rounded-lg bg-content"
						:class="`shadow-${size.name} shadow-${intensity.name}`"
					>
					</div>
				</template>
			</template>
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
		};
	},
	computed: {},
});
</script>
