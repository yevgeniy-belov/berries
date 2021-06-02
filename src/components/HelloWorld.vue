<template>
<div class="p-3 bg-gradient-to-r from-test to-test-2"></div>
	<div class="flex space-x-5 p-4">
		<div class="flex-grow rounded-full p10 bg-gradient-to-r from-primary to-info p-5"></div>
		<div class="flex-grow rounded-full p10 bg-gradient-to-r from-primary to-standout p-5"></div>
		<div class="flex-grow rounded-full p10 bg-gradient-to-r from-error to-warning p-5"></div>
		<div class="flex-grow rounded-full p10 bg-gradient-to-r from-error to-standout p-5"></div>
		<div class="flex-grow rounded-full p10 bg-gradient-to-r from-success to-info p-5"></div>
		<div class="flex-grow rounded-full p10 bg-gradient-to-r from-standout to-info p-5"></div>
	</div>
	<!-- <div class="bg-purple-900">
		<div class="text-center text-inverted-strongest p-16">
			<div class="text-6xl italic font-bold">Berries</div>
			<div class="mt-6 text-xl font-thin">A design system for building web applications</div>
		</div>
		<div class="flex flex-0 justify-center">
			<div class="tabs tabs--inverted tabs--marker">
				<button type="button" class="tabs__item">About</button>
				<button type="button" class="tabs__item open">Two</button>
				<button type="button" class="tabs__item">Three</button>
			</div>
		</div>
	</div> -->
	<!-- <div class="text-5xl">
		ABCDEFGHIJKLMNOPQRSTUVWXYZ
		<br />
		abcdefghijklmnopqrstuvwxyz
		<br />
		1234567890
		<br />
		{{ abcies }}
	</div> -->
	<!-- <div class="flex flex-0 justify-center m-5">
		<div class="tabs">
			<button type="button" class="tabs__item">About</button>
			<button type="button" class="tabs__item open">Two</button>
			<button type="button" class="tabs__item">Three</button>
		</div>
	</div>
	<div class="flex flex-0 justify-center m-5">
		<div class="tabs tabs--marker">
			<button type="button" class="tabs__item">About</button>
			<button type="button" class="tabs__item open">Two</button>
			<button type="button" class="tabs__item">Three</button>
		</div>
	</div> -->
	<div class="flex">
		<div class="grid grid-cols-7 auto-rows-max gap-1 m-5 p-4">
			<template class="" v-for="(color, index) in bgColors.colors" :key="index">
				<template v-for="(shade, index) in bgColors.modularShades.list" :key="index">
					<div
						class="p-5 rounded-full *shadow-md"
						:class="`bg-${color.name}`"
						v-if="shade === 'default'"
					></div>
					<div
						class="p-5 rounded-full *shadow-md hover:bg-a-strong"
						:class="`bg-${color.name} bg-${shade}`"
						v-if="shade !== 'default'"
					></div>
				</template>
			</template>
		</div>
		<div class="grid grid-cols-7 auto-rows-max gap-1 m-5 bg-lines p-4">
			<template class="" v-for="(color, index) in bgColors.colors" :key="index">
				<template v-for="(transparency, index) in bgColors.transparencies" :key="index">
					<div
						class="p-5 rounded-full *shadow-md hover:bg-a-strong"
						:class="`bg-${color.name}`"
						v-if="transparency === 'default'"
					></div>
					<div
						class="p-5 rounded-full *shadow-md hover:bg-a-strong"
						:class="`bg-${color.name} 	bg-a-${transparency}`"
						v-if="transparency !== 'default'"
					></div>
				</template>
			</template>
		</div>
		<div class="grid grid-cols-7 auto-rows-max gap-1 m-5 bg-lines-bold p-4 break-all relative">
			<div class="absolute h-full w-full"
				></div
			>
			<template class="" v-for="(color, index) in bgColors.colors" :key="index">
				<template v-for="(blur, index) in bgColors.blurs" :key="index">
					<div
						class="p-5 rounded-full backdrop-filter *shadow-md hover:backdrop-blur-0 bg-a-medium"
						:class="`bg-${color.name} backdrop-blur-${blur.name}`"
					></div>
				</template>
			</template>
			<div class="absolute bottom-0 w-full p-10 danger-to-warning"></div>
		</div>
	</div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import backgroundColors from '../SSOT';
export default defineComponent({
	data() {
		return {
			bgColors: backgroundColors,
			abcies: `‘?’“!”(%)[#]{@}/&\<-+÷×=>®©$€£¥¢:;,.*`,
		};
	},
	computed: {
		shades() {
			return backgroundColors.modularShades.list.filter((shade: string) => shade !== 'default');
		},
	},
});
</script>
