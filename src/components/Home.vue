<template>
	<div class="flex-1 overflow-auto">
		<div class="m-7 p-3 border-r-danger border-dashed">border-r-danger border-dashed</div>
		<div class="m-7 p-3 border-primary border-dashed">border-primary border-dashed</div>
		<div class="m-7 p-3 border">border</div>
		<div class="m-7 p-3 border-r border-danger border-dashed">border border-r-danger</div>
		<div class="m-7 p-3 border border-r-danger border-r">border border-r-danger border-r</div>
		<div class="m-7 p-3 border-r-danger">border-r-danger</div>
		<div class="bg-primary"> </div>
		<div class="grid grid-cols-7 auto-rows-max -gap-1 m-5 p-2">
			<template class="" v-for="(color, index) in ssot.colors.list" :key="index">
				<template v-for="(strength, index) in ssot.border.strength.list" :key="index">
					<div
						class="p-1 *rounded-full"
						:class="`
						border border-${color.name} border-${strength.name}
						`"
					></div>
				</template>
			</template>
		</div>
		<div class="grid grid-cols-7 auto-rows-max -gap-1 m-5 p-2">
			<template class="" v-for="(color, index) in ssot.colors.list" :key="index">
				<template v-for="(strength, index) in ssot.border.strength.list" :key="index">
					<div
						class="p-1 *rounded-full"
						:class="`
						border-l border-l-${color.name} border-l-${strength.name}
						border-t border-t-success
						border-r-primary border-r
						border-b border-b-standout
						`"
					></div>
				</template>
			</template>
		</div>
		<div class="flex">
			<div class="grid grid-cols-7 auto-rows-max gap-1 m-5 p-4">
				<template class="" v-for="(color, index) in ssot.colors.list" :key="index">
					<template v-for="(strength, index) in ssot.border.strength.list" :key="index">
						<div
							class="p-5 *rounded-full"
							:class="`border-t border-t-${color.name} border-t-${strength.name}`"
						></div>
					</template>
				</template>
			</div>
			<div class="grid grid-cols-7 auto-rows-max gap-1 m-5 p-4">
				<template class="" v-for="(color, index) in ssot.colors.list" :key="index">
					<template v-for="(shade, index) in ssot.modularShades.list" :key="index">
						<div class="p-5 rounded-full" :class="`bg-${color.name} hover:bg-dark  bg-${shade.name}`"></div>
					</template>
				</template>
			</div>
			<div class="grid grid-cols-7 auto-rows-max gap-1 m-5 bg-lines p-4">
				<template class="" v-for="(color, index) in ssot.colors.list" :key="index">
					<template v-for="(transparency, index) in ssot.transparencies.list" :key="index">
						<div class="p-5 rounded-full" :class="`bg-${color.name}  bg-a-${transparency.name}`"></div>
					</template>
				</template>
			</div>
			<div class="grid grid-cols-7 auto-rows-max gap-1 m-5 bg-lines-bold p-4 break-all relative">
				<div class="absolute h-full w-full"></div>
				<template class="" v-for="(color, index) in ssot.colors.list" :key="index">
					<template v-for="(blur, index) in ssot.blurs.list" :key="index">
						<div
							class="p-5 rounded-full backdrop-filter bg-a-weak hover:backdrop-blur-0"
							:class="`bg-${color.name} backdrop-blur-${blur.name}`"
						></div>
					</template>
				</template>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import ssot from '../SSOT.json';
export default ({
	data() {
		return {
			ssot: ssot,
			abcies: `‘?’“!”(%)[#]{@}/&\<-+÷×=>®©$€£¥¢:;,.*`,
		};
	},
	computed: {},
});
</script>
