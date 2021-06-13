<template>
	<div class=" border m-1 p-1 border-dotted flex flex-wrap"
	style="
	zoom: 6;
	font-size: 2px;
	"
	>
		<template v-for="(borderCase, index) in cases" :key="index">
			<div
				class="px-1 py-1 bg-aside"
				style="padding:4px; margin:1px"
				:class="`${borderCase}`"
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
				'border-r ',
				'border-r border-weakest',
				'border-r border-dashed border-strongest',
				'border-r border-dashed border-danger border-strongest',
				'border-r-2 ',
				'border border-danger ',
				'divide-y divide-dashed',
			],
		};
	},
	computed: {},
});
</script>
