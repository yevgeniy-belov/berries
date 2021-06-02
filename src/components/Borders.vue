<template>
	<div class="" style="font-size: 3px; background-color: #eee; padding: 5px">
		<template v-for="(borderCase, index) in cases" :key="index">
			<div
				class="px-2 py-1 bg-aside"
				:class="`${borderCase}`"
				style="display: inline-block; margin: 1px; padding: 4px; background-color: #fff"
			>
				<div class="" v-for="(claz, index) in borderCase.split(' ')" :key="index">{{ claz }}</div>
			</div>
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
			cases: [
				'border',
				'border border-primary',
				'border border-primary border-t-dashed border-b-dotted border-b-success border-r-danger',
				'border border-weakest border-r-strongest border-primary border-t-dashed border-b-dotted border-b-success border-r-warning border-r-boldest border-b-strongest rounded-xl',
				'border-danger border-bold border-l border-dashed',
				'border-danger border-l border-dashed',
				'border-danger border border-dashed',
				'border-danger border border-b-warning border-l-info border-dotted',
				'border border-dashed border-t-danger',
				'border border-r-danger',
				'border-t',
				'border-t border-dotted',
				'border-t border-danger',
				'border border-dotted',
				'border-t border-dotted border-danger',
				'border-t border-dotted border-t-danger',
				'border-t border-t-primary',
				'border-primary border-b border-b-dashed',
				'border border-danger',
				'border border-danger border-weakest',
				'border border-success',
				'border border-r-danger',
				'border-b border-b-success border-t border-t-danger border-t-weakest',
				'border-b border-strongest',
				'border border-dashed border-primary  border-l-info',
				'border border-dashed border-primary border-b-danger border-t-info',
			],
		};
	},
	computed: {},
});
</script>
