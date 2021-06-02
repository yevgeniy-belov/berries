<template>
	<div class="flex">
		<div class="p-10 bg-content">
			<template v-for="(color, index) in ssot.colors.list" :key="index">
				<div class="flex" :class="`grid-cols-${color.lightness.length}`">
					<template v-for="(shade, index) in color.lightness" :key="index">
						<div
							class="w-14 h-14"
							v-if="shade.name !== 'default'"
							:class="`bg-${color.name}-${shade.name} transition duration-xs`"
						></div>
						<div
							class="w-14 h-14"
							v-if="shade.name === 'default'"
							:class="`bg-${color.name} transition duration-xs`"
						></div>
					</template>
				</div>
			</template>
			<template v-for="(color, index) in ssot.colors.list" :key="index">
				<div class="grid auto-rows-max" :class="`grid-cols-${color.lightness.length}`">
					<template v-for="(shade, index) in color.lightness" :key="index">
						<div
							class="w-12 h-12 m-1 rounded-full"
							v-if="shade.name !== 'default'"
							:class="`bg-${color.name}-${shade.name} transition duration-xs`"
						></div>
						<div
							class="w-12 h-12 m-1 rounded-full"
							v-if="shade.name === 'default'"
							:class="`bg-${color.name} transition duration-xs`"
						></div>
					</template>
				</div>
			</template>
		</div>
		<div class="p-10 bg-aside">
			<div class="">.bg-aside</div>
			<template v-for="(color, index) in ssot.colors.list" :key="index">
				<div class="grid auto-rows-max" :class="`grid-cols-${color.lightness.length}`">
					<template v-for="(shade, index) in color.lightness" :key="index">
						<div
							class="w-12 h-12 m-1 rounded-full"
							v-if="shade.name !== 'default'"
							:class="`bg-${color.name}-${shade.name} transition duration-xs`"
						></div>
						<div
							class="w-12 h-12 m-1 rounded-full"
							v-if="shade.name === 'default'"
							:class="`bg-${color.name} transition duration-xs`"
						></div>
					</template>
				</div>
			</template>
		</div>
		<div class="p-10 bg-canvas">
			<div class="">.bg-canvas</div>
			<template v-for="(color, index) in ssot.colors.list" :key="index">
				<div class="grid auto-rows-max" :class="`grid-cols-${color.lightness.length}`">
					<template v-for="(shade, index) in color.lightness" :key="index">
						<div
							class="w-12 h-12 m-1 rounded-full"
							v-if="shade.name !== 'default'"
							:class="`bg-${color.name}-${shade.name} transition duration-xs`"
						></div>
						<div
							class="w-12 h-12 m-1 rounded-full"
							v-if="shade.name === 'default'"
							:class="`bg-${color.name} transition duration-xs`"
						></div>
					</template>
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
			sizes: ['0', '1', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
			fullColorsList: [...ssot.colors.list, ...ssot.layoutColors.list],
			fullBorderColorsList: [
				...[{ '': '' }], // Default color
				...ssot.colors.list,
			],
		};
	},
	computed: {},
});
</script>
