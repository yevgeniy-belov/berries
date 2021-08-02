<template>
	<div class="flex-1 overflow-auto">
		<div class="max-w-5xl mx-auto p-16">
			<table>
				<thead>
					<tr>
						<th
							class="w-16 font-light text-weakest pb-4"
							v-for="(strength, index) in ssot.border.strength.list"
							:key="index"
							>{{ strength.name }}</th
						>
					</tr>
					<tr>
						<th class="w-30"></th>
					</tr>
				</thead>
				<tbody>
					<template v-for="(color, index) in fullBorderColorsList" :key="index">
						<tr>
							<template v-for="(strength, index) in ssot.border.strength.list" :key="index">
								<td class="relative py-2">
									<div class="flex items-center justify-center">
										<div
											class="w-10 h-10 rounded-full"
											:class="`border-boldest border${
												color.name !== '' ? `-${color.name}` : ''
											}-${strength.name}`"
										></div>
									</div>
								</td>
							</template>
							<td class="w-16 font-light text-weakest pl-4"> {{ color.name }}</td>
						</tr>
					</template>
				</tbody>
			</table>
		</div>
		<div
			class="m-1 p-1 border border-t-success border-r-bold border-b-strongest border-dotted flex flex-wrap"
			style="zoom: 6; font-size: 2px"
		>
			<template v-for="(borderCase, index) in cases" :key="index">
				<div
					class="px-1 py-1 bg-aside"
					style="padding: 4px; margin: 1px; display: inline-block"
					:class="`${borderCase}`"
				>
					<div class="" v-for="(claz, index) in borderCase.split(' ')" :key="index">{{ claz }}</div>
				</div>
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
			cases: [
				'border',
				'border border-bold border-r-boldest border-primary',
				'border border-primary border-t-dashed border-b-dotted border-b-success border-r-danger-weakest',
				'border border-primary-weakest border-t-dashed border-b-dotted border-b-success border-r-warning-strongest border-r-boldest border-b-strongest rounded-xl',
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
				'border border-danger-weakest',
				'border border-success',
				'border border-r-danger',
				'border-b border-b-success border-t border-t-danger-weakest',
				'border-b border-strongest',
				'border border-dashed border-primary border-l-info',
				'border border-dashed border-primary border-b-danger border-t-info',
			],
			fullColorsList: [...ssot.colors.list, ...ssot.layoutColors.list],
			fullBorderColorsList: [
				...[{ name: '' }], // Default color
				...ssot.colors.list,
			],
		};
	},
	computed: {},
});
</script>
