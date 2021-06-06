<template>
	<div class="scroll-snap-type-proximity overflow-auto h-screen">
		<div class="bg-primary-darkest flex items-center scroll-snap-align-start h-screen theme theme-dark">
			<div class="max-w-5xl mx-auto text-center">
				<h1 class="text-5xl font-semibold text-strongest mb-4">{{ ssot.about.system.name }}</h1>
				<h1 class="text-2xl font-thin text-weak">{{ ssot.about.system.subTitle }}</h1>
			</div>
		</div>

		<div class="scroll-snap-align-start flex h-screen">
			<div class="container flex flex-col justify-center">
				<div class="text-center flex flex-col mb-10">
					<div class="text-strong m-auto max-w-[40ch] text-4xl font-light mb-5">
						{{ ssot.nomenclature.title }}
					</div>
				</div>
				<div class="grid grid-cols-5 gap-16">
					<div class="">
						<div class="font-black text-strongest mb-4">Role</div>
						<template v-for="(colors, index) in ssot.colors.list" :key="index">
							<div class="font-mono font-medium">{{ colors.name }}</div>
						</template>
					</div>
					<div class="">
						<div class="font-black text-strongest mb-4">Lightness</div>
						<template v-for="(shade, index) in ssot.modularShades.list" :key="index">
							<div class="font-mono font-medium">{{ shade.name }}</div>
						</template>
					</div>
					<div class="">
						<div class="font-black text-strongest mb-4">Strength</div>
						<template v-for="(strength, index) in ssot.border.strength.list" :key="index">
							<div class="font-mono font-medium">{{ strength.name }}</div>
						</template>
					</div>
					<div class="">
						<div class="font-black text-strongest mb-4">Size</div>
						<template v-for="(size, index) in sizes" :key="index">
							<div class="font-mono font-medium">{{ size }}</div>
						</template>
					</div>
					<div class="">
						<div class="font-black text-strongest mb-4">Weight</div>
						<template v-for="(width, index) in ssot.border.width.list" :key="index">
							<div class="font-mono font-medium">{{ width.name }}</div>
						</template>
					</div>
				</div>
			</div>
		</div>
		<div class="bg-canvas flex justify-center items-center scroll-snap-align-start h-screen">
			<div class="container">
				<div class="text-center flex flex-col mb-10">
					<div class="text-strong m-auto max-w-[40ch] text-4xl font-light mb-5"> Utility First </div>
					<div class="text-xl font-light">Build custom designs without writing CSS</div>
				</div>
				<div class="grid grid-cols-2 gap-10">
					<div class="bg-content">test</div>
					<div class="">
						<pre>
							<div class="bg-content">test</div>
						</pre>
					</div>
				</div>
			</div>
		</div>
		<div class="bg-primary-darkest flex justify-center items-center scroll-snap-align-start h-screen theme theme-dark">
			<div class="container">
				<div class="text-center max-w-[40ch] m-auto mb-16">
					<div class="text-strong text-4xl font-light mb-5">
						{{ ssot.themes.about.title }}
					</div>
					<div class="text-weak text-xl font-light">{{ ssot.themes.about.body }}</div>
				</div>
				<div class="grid grid-cols-2 gap-10">
					<div class="w-full h-64 shadow-lg shadow-strongest bg-canvas flex flex-row rounded-md overflow-hidden theme theme-dark">
						<div class="bg-aside w-24 border-r"></div>
						<div class="flex-grow flex-col overflow-auto">
							<div class="shadow-xs rounded-sm overflow-hidden m-5">
								<div class="flex-grow-0 flex-shrink-0 bg-aside center px-3 py-1">Title A</div>
								<div class="flex-grow bg-content h-16"></div>
							</div>
							<div class="shadow-xs rounded-sm overflow-hidden m-5">
								<div class="flex-grow-0 flex-shrink-0 bg-aside center px-3 py-1">Title B</div>
								<div class="flex-grow bg-content h-16"></div>
							</div>
							<div class="shadow-xs rounded-sm overflow-hidden m-5">
								<div class="flex-grow-0 flex-shrink-0 bg-aside center px-3 py-1">Title C</div>
								<div class="flex-grow bg-content h-16"></div>
							</div>
						</div>
					</div>
					<div class="w-full h-64 shadow-lg shadow-strongest bg-canvas flex flex-row rounded-md overflow-hidden theme theme-light">
						<div class="bg-aside w-24 border-r"></div>
						<div class="flex-grow flex-col overflow-auto">
							<div class="shadow-xs rounded-sm overflow-hidden m-5">
								<div class="flex-grow-0 flex-shrink-0 bg-aside center px-3 py-1">Title A</div>
								<div class="flex-grow bg-content h-16"></div>
							</div>
							<div class="shadow-xs rounded-sm overflow-hidden m-5">
								<div class="flex-grow-0 flex-shrink-0 bg-aside center px-3 py-1">Title B</div>
								<div class="flex-grow bg-content h-16"></div>
							</div>
							<div class="shadow-xs rounded-sm overflow-hidden m-5">
								<div class="flex-grow-0 flex-shrink-0 bg-aside center px-3 py-1">Title C</div>
								<div class="flex-grow bg-content h-16"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="flex items-center scroll-snap-align-start h-screen">
			<div
				class="grid max-w-5xl mx-auto auto-rows-max *gap-1 m-5 p-4"
				:class="`grid-cols-${ssot.typography.strength.list.length}`"
			>
				<template v-for="(size, index) in ssot.typography.sizes.list" :key="index">
					<template v-for="(strength, index) in ssot.typography.strength.list" :key="index">
						<div class="" :class="`text-${size.name} text-${strength.name}`"> m </div>
					</template>
				</template>
			</div>
		</div>
		<div class="bg-aside flex items-center scroll-snap-align-start h-screen">
			<div class="grid grid-cols-2 gap-32 max-w-5xl mx-auto">
				<div class="col-6 grid auto-rows-max gap-10" :class="`grid-cols-${ssot.shadows.sizes.list.length}`">
					<template v-for="(strength, index) in ssot.shadows.strength.list" :key="index">
						<template v-for="(size, index) in ssot.shadows.sizes.list" :key="index">
							<div
								class="w-12 h-12 rounded-full bg-content transition duration-xs hover:shadow-xl"
								:class="`shadow-${size.name} shadow-${strength.name}`"
							>
							</div>
						</template>
					</template>
				</div>
				<div class="col-6">
					<div class="text-2xl font-medium mb-4">
						{{ ssot.shadows.about.title }}
					</div>
					<div class="">{{ ssot.shadows.about.body }}</div>
				</div>
			</div>
		</div>
		<div class="flex items-center scroll-snap-align-start h-screen">
			<div class="max-w-5xl mx-auto">
				<div class="grid grid-cols-7 auto-rows-max gap-1">
					<template class="" v-for="(color, index) in fullBorderColorsList" :key="index">
						<template v-for="(strength, index) in ssot.border.strength.list" :key="index">
							<div
								class="w-12 h-12 rounded-full"
								:class="`border border-boldest transition duration-xs hover:border-strongest border-${color.name} border-${strength.name}`"
							></div>
						</template>
					</template>
				</div>
			</div>
		</div>
		<!-- Shades -->
		<div class="flex items-center scroll-snap-align-start h-screen">
			<div class="max-w-5xl mx-auto">
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
		<!--  -->
		<div class="flex items-center scroll-snap-align-start bg-lines h-screen">
			<div class="max-w-5xl mx-auto">
				<div class="grid auto-rows-max gap-1" :class="`grid-cols-${ssot.transparencies.list.length}`">
					<template class="" v-for="(color, index) in fullColorsList" :key="index">
						<template v-for="(transparency, index) in ssot.transparencies.list" :key="index">
							<div
								class="border w-12 h-12 rounded-full transition duration-xs hover:bg-a-weakest"
								:class="`bg-${color.name}  bg-a-${transparency.name}`"
							></div>
						</template>
					</template>
				</div>
			</div>
		</div>
		<div class="flex items-center scroll-snap-align-start bg-lines-bold h-screen">
			<div class="max-w-5xl mx-auto">
				<div class="grid auto-rows-max gap-1 break-all relative" :class="`grid-cols-${ssot.blurs.list.length}`">
					<div class="absolute h-full w-full"></div>
					<template class="" v-for="(color, index) in fullColorsList" :key="index">
						<template v-for="(blur, index) in ssot.blurs.list" :key="index">
							<div
								class="
									w-12
									h-12
									rounded-full
									backdrop-filter
									bg-a-weak
									transition
									duration-xs
									hover:backdrop-blur-0
								"
								:class="`bg-${color.name} backdrop-blur-${blur.name}`"
							></div>
						</template>
					</template>
				</div>
			</div>
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
