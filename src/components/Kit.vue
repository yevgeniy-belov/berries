<template>
	<div class="scroll-snap-type-mandatory overflow-auto h-screen">
		<div class="bg-canvas flex items-center scroll-snap-align-start h-screen">
			<div class="container mx-auto">
				<div class="grid lg:grid-cols-3">
					<div class="mb-10">
						<div class="text-4xl font-bold mb-6 text-center">Ineficiency</div>
						<div class="text-xl text-center space-y-4">
							<div class="">No design Reusability</div>
							<div class="">No code Reusability</div>
							<div class="">Hard to Maintain</div>
							<div class="">Not scalable</div>
						</div>
					</div>
					<div class="mb-10">
						<div class="text-4xl font-bold mb-6 text-center">Insecurity</div>
						<div class="text-xl text-center space-y-4">
							<div class="">Vague guidelines</div>
							<div class="">Outdated guidelines</div>
							<div class="">Incomplete guidelines</div>
							<div class="">Lack of collaboration</div>
						</div>
					</div>
					<div class="mb-10">
						<div class="text-4xl font-bold mb-6 text-center">Inconsistency</div>
						<div class="text-xl text-center space-y-4">
							<div class="">Unpredictable UI</div>
							<div class="">Fragmented UX</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="bg-canvas flex items-center scroll-snap-align-start h-screen">
			<div class="mx-auto">
				<div class="text-5xl font-bold mb-16 text-center">Design System</div>
				<div class="flex space-x-32">
					<div class="">
						<div class="text-2xl font-semibold mb-6">Style Guide</div>
						<div class="text-xl space-y-4">
							<div class="">Principles</div>
							<div class="">Decisions</div>
							<div class="">References</div>
						</div>
					</div>
					<div class="">
						<div class="text-2xl font-semibold mb-6">Components Library</div>
						<div class="text-xl space-y-4">
							<div class="">Reusable components (design)</div>
							<div class="">Reusable components (dev)</div>
						</div>
					</div>
					<div class="">
						<div class="text-2xl font-semibold mb-6">Patterns Library</div>
						<div class="text-xl space-y-4">
							<div class="">Layouts</div>
							<div class="">Templates</div>
						</div>
					</div>
					<div class="">
						<div class="text-2xl font-semibold mb-6">Team</div>
						<div class="text-xl space-y-4">
							<div class="">Maintenance</div>
							<div class="">Supervision</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="bg-canvas flex items-center scroll-snap-align-start h-screen">
			<div class="max-w-5xl mx-auto text-center flex flex-col space-y-4">
				<div class="text-4xl font-bold mb-16">Components Library</div>
				<div class="border-bold border-brand border-dashed p-4 flex flex-col">
					<h1 class="text-2xl font-semibold my-2">Principles & Decisions</h1>
					<div class="triangle-down self-center"></div>
					<h1 class="text-2xl font-semibold my-2">Elements</h1>
				</div>
				<div class="triangle-down self-center"></div>
				<h1 class="text-2xl text-weakest my-2">Components - CSS&HTML</h1>
				<div class="triangle-down self-center"></div>
				<h1 class="text-2xl text-weakest my-2">Components - Javascript</h1>
				<div class="triangle-down self-center"></div>
				<h1 class="text-2xl text-weakest my-2">Patterns</h1>
				<div class="triangle-down self-center"></div>
				<h1 class="text-2xl text-weakest my-2">Applications</h1>
			</div>
		</div>
		<div
			class="
				animation-notexistent
				bg-canvas
				flex
				justify-center
				flex-col
				items-center
				scroll-snap-align-start
				h-screen
				theme theme-dark-primary
			"
		>
			<div class="my-29 flex items-center flex-col justify-center berries">
				<div class="berries-icon mb-12">
					<div class="berries-icon__item berries-icon__1"></div>
					<div class="berries-icon__item berries-icon__2"></div>
					<div class="berries-icon__item berries-icon__3"></div>
					<div class="berries-icon__item berries-icon__4"></div>
					<div class="berries-icon__item berries-icon__5"></div>
					<div class="berries-icon__item berries-icon__6"></div>
				</div>
				<div class="max-w-5xl mx-auto text-center">
					<div class="text-4xl font-black berries-name">Berries</div>
				</div>
			</div>
			<h1 class="text-2xl font-thin berries-description mt-24">{{ ssot.about.system.description }}</h1>
		</div>

		<div class="-bg-canvas flex items-center scroll-snap-align-start h-screen">
			<div class="mx-auto">
				<div class="text-4xl font-bold mb-8">Elements</div>
				<div class="space-y-2 text-xl">
					<div class="">Colors</div>
					<div class="">Typography</div>
					<div class="">Dimensions</div>
					<div class="">Backgrounds</div>
					<div class="">Textures</div>
					<div class="">Opacities</div>
					<div class="">Borders</div>
					<div class="">Shadows</div>
					<div class="">Animations</div>
				</div>
			</div>
		</div>

		<div class="scroll-snap-align-start flex h-screen">
			<div class="container flex flex-col justify-center">
				<div class="text-center flex flex-col mb-20">
					<div class="text-strong m-auto max-w-[40ch] text-4xl -font-light"> Nomenclature </div>
				</div>
				<div class="flex self-center space-x-32 text-lg">
					<div class="">
						<div class="font-black text-strongest mb-4">Role</div>
						<template v-for="(colors, index) in ssot.colors.list" :key="index">
							<div class="font-mono font-medium text-weak">{{ colors.name }}</div>
						</template>
					</div>
					<div class="">
						<div class="font-black text-strongest mb-4">Lightness</div>
						<template v-for="(shade, index) in ssot.modularShades.list" :key="index">
							<div class="font-mono font-medium text-weak"> {{ shade.name }}</div>
						</template>
					</div>
					<div class="">
						<div class="font-black text-strongest mb-4">Strength</div>
						<template v-for="(strength, index) in ssot.border.strength.list" :key="index">
							<div class="font-mono font-medium text-weak"> {{ strength.name }}</div>
						</template>
					</div>
					<div class="">
						<div class="font-black text-strongest mb-4">Size</div>
						<template v-for="(size, index) in sizes" :key="index">
							<div class="font-mono font-medium text-weak"> {{ size }}</div>
						</template>
					</div>
					<div class="">
						<div class="font-black text-strongest mb-4">Weight</div>
						<template v-for="(width, index) in ssot.border.width.list" :key="index">
							<div class="font-mono font-medium text-weak"> {{ width.name }}</div>
						</template>
					</div>
				</div>
			</div>
		</div>

		<div class="flex text-center flex flex-col justify-center items-center scroll-snap-align-start h-screen">
			<div class="mb-10">
				<div class="text-strong m-auto max-w-[40ch] text-4xl -font-light mb-5"> Typography </div>
			</div>

			<table class="self-center">
				<thead>
					<tr>
						<th
							class="w-20 font-light text-weakest pb-4"
							v-for="(size, index) in ssot.typography.sizes.list"
							:key="index"
							>{{ size.name }}</th
						>
					</tr>
					<tr>
						<th class="w-0"></th>
					</tr>
				</thead>
				<tbody>
					<template v-for="(strength, index) in ssot.typography.strength.list" :key="index">
						<tr>
							<template v-for="(size, index) in ssot.typography.sizes.list" :key="index">
								<td class="relative">
									<div class="flex items-center justify-center">
										<div class="px-3" :class="`text-${size.name} text-${strength.name}`">a</div>
									</div>
								</td>
							</template>
							<td class="w-16 font-light text-weakest pl-4"> {{ strength.name }}</td>
						</tr>
					</template>
				</tbody>
			</table>
		</div>
		<div class="bg-aside flex flex-col justify-center items-center scroll-snap-align-start h-screen">
			<div class="text-4xl font-medium mb-20">
				{{ ssot.shadows.about.title }}
			</div>
			<!-- <div class="">{{ ssot.shadows.about.body }}</div> -->
			<div class="pl-16">
				<table>
					<thead>
						<tr>
							<th
								class="w-24 font-light text-weakest pb-4"
								v-for="(size, index) in ssot.shadows.sizes.list"
								:key="index"
								>{{ size.name }}</th
							>
						</tr>
						<tr>
							<th class="w-0"></th>
						</tr>
					</thead>
					<tbody>
						<template v-for="(strength, index) in ssot.shadows.strength.list" :key="index">
							<tr>
								<template v-for="(size, index) in ssot.shadows.sizes.list" :key="index">
									<td class="relative py-5">
										<div class="flex items-center justify-center">
											<div
												class="
													w-10
													h-10
													rounded-full
													bg-content
													transition
													duration-xs
													hover:shadow-xl hover:shadow-strong
												"
												:class="`shadow-${size.name} shadow-${strength.name}`"
											>
											</div>
										</div>
									</td>
								</template>
								<td class="w-16 font-light text-weakest pl-4"> {{ strength.name }}</td>
							</tr>
						</template>
					</tbody>
				</table>
			</div>
		</div>

		<!-- Shades -->

		<div class="flex flex-col bg-content items-center justify-center scroll-snap-align-start h-screen">
			<div class="text-4xl font-medium mb-20"> Backgrounds </div>
			<table>
				<thead>
					<tr>
						<th
							class="w-20 font-light text-weakest pb-4"
							v-for="(shade, index) in ssot.colors.list[0].lightness"
							:key="index"
							>{{ shade.name }}</th
						>
					</tr>
					<tr>
						<th class="w-0"></th>
					</tr>
				</thead>
				<tbody>
					<template v-for="(color, index) in ssot.colors.list" :key="index">
						<tr>
							<template v-for="(shade, index) in color.lightness" :key="index">
								<td class="relative py-2">
									<div class="flex items-center justify-center">
										<div
											class="w-10 h-10 m-1 rounded-full"
											v-if="shade.name !== 'default'"
											:class="`bg-${color.name}-${shade.name} transition duration-xs`"
										></div>
										<div
											class="w-10 h-10 m-1 rounded-full"
											v-if="shade.name === 'default'"
											:class="`bg-${color.name} transition duration-xs`"
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
		<!--  -->
		<div
			class="
				flex flex-col
				justify-center
				-theme -theme-dark-primary
				bg-content
				items-center
				scroll-snap-align-start
				h-screen
			"
		>
			<div class="text-4xl font-medium mb-20"> Borders </div>
			<div class="max-w-5xl mx-auto pl-16">
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
		</div>
		<!-- <div class="flex items-center scroll-snap-align-start bg-lines h-screen">
			<div class="max-w-5xl mx-auto">
				<div class="grid auto-rows-max gap-1" :class="`grid-cols-${ssot.transparencies.list.length}`">
					<template class="" v-for="(color, index) in fullColorsList" :key="index">
						<template v-for="(transparency, index) in ssot.transparencies.list" :key="index">
							<div
								class="border w-10 h-10 rounded-full transition duration-xs hover:bg-a-weakest"
								:class="`bg-${color.name}  bg-a-${transparency.name}`"
							></div>
						</template>
					</template>
				</div>
			</div>
		</div> -->
		<!-- <div class="flex items-center scroll-snap-align-start bg-lines-bold h-screen">
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
		</div> -->

		<div
			class="
				bg-content
				flex
				justify-center
				items-center
				scroll-snap-align-start
				h-screen
				theme theme-dark-primary
			"
		>
			<div class="container">
				<div class="text-center m-auto mb-20">
					<div class="text-strong text-4xl font-light">
						{{ ssot.themes.about.title }}
					</div>
					<!-- <div class="text-weak text-xl font-light">{{ ssot.themes.about.body }}</div> -->
				</div>
				<div class="grid grid-cols-3 gap-10">
					<div
						class="
							w-full
							h-64
							shadow-lg shadow-strongest
							bg-canvas
							flex flex-row
							rounded-md
							overflow-hidden
							theme theme-dark-primary
						"
					>
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
					<div
						class="
							w-full
							h-64
							shadow-lg shadow-strongest
							bg-canvas
							flex flex-row
							rounded-md
							overflow-hidden
							theme theme-dark
						"
					>
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
					<div
						class="
							w-full
							h-64
							shadow-lg shadow-strongest
							bg-canvas
							flex flex-row
							rounded-md
							overflow-hidden
							theme theme-light
						"
					>
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
		<div class="bg-canvas flex justify-center items-center scroll-snap-align-start h-screen">
			<div class="container">
				<div class="text-center flex flex-col mb-10">
					<div class="text-strong m-auto max-w-[40ch] text-4xl font-light mb-5"> Utility First </div>
					<div class="text-xl font-light">Build custom designs without writing CSS.</div>
				</div>
				<div class="flex justify-center">
					<div class="flex flex-col w-1/2 shadow-xl h-96">
						<div class="flex-0 border-b px-4 py-2 theme theme-dark-primary font-light uppercase">Title</div>
						<div class="flex flex-1 flex-row">
							<div class="flex-0 flex flex-col border-r theme theme-dark-primary p-6 text-xs">
								<div class="flex items-center w-28">
									<div class="flex items-center justify-center h-6 w-6 bg-[#ffffff] rounded-full"
										><svg
											class="w-4 h-4"
											xmlns="http://www.w3.org/2000/svg"
											xmlns:xlink="http://www.w3.org/1999/xlink"
											version="1.1"
											x="0px"
											y="0px"
											viewBox="0 0 76.887 55.552"
											style="enable-background: new 0 0 76.887 55.552"
											xml:space="preserve"
										>
											<polygon
												style="fill: var(--color-primary)"
												points="34.373,49.541 76.887,5.889 70.739,0 28.426,43.458 6.078,20.632 0,26.585 22.488,49.557    22.488,49.557 28.517,55.552 28.426,55.467 28.517,55.552 34.373,49.541  "
											/></svg
									></div>
									<div class="ml-2 uppercase font-light">Step 1</div>
								</div>
								<div class="h-10 w-0 ml-[11px] my-1 border-r border-r-bold border-strongest"></div>
								<div class="flex items-center w-28">
									<div class="flex items-center justify-center h-6 w-6 bg-[#ffffff] rounded-full"
										><svg
											class="w-4 h-4"
											xmlns="http://www.w3.org/2000/svg"
											xmlns:xlink="http://www.w3.org/1999/xlink"
											version="1.1"
											x="0px"
											y="0px"
											viewBox="0 0 76.887 55.552"
											style="enable-background: new 0 0 76.887 55.552"
											xml:space="preserve"
										>
											<polygon
												style="fill: var(--color-primary)"
												points="34.373,49.541 76.887,5.889 70.739,0 28.426,43.458 6.078,20.632 0,26.585 22.488,49.557    22.488,49.557 28.517,55.552 28.426,55.467 28.517,55.552 34.373,49.541  "
											/></svg
									></div>
									<div class="ml-2 uppercase font-light">Step 2</div>
								</div>
								<div class="h-10 w-0 ml-[11px] my-1 border-r border-r-bold border-strongest"></div>
								<div class="flex items-center w-28">
									<div class="flex items-center justify-center h-6 w-6 bg-[#ffffff] rounded-full">
										<div class="text-md font-semibold" style="color: var(--color-primary)">3</div>
									</div>
									<div class="ml-2 uppercase font-light">Summary</div>
								</div>
							</div>
							<div class="flex flex-col">
								<div class="flex-1 p-6 bg-canvas"
									>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatibus in
									ullam amet, ducimus, magnam ab quae cupiditate iure nam illum, reiciendis debitis
									veniam velit. Ab, ea ducimus laboriosam molestiae maxime quas quam excepturi
									corporis libero magnam sit expedita officiis accusantium delectus. Soluta culpa
									laudantium quos quia, eius numquam accusantium.</div
								>
								<div class="flex-0 border-t py-2 px-4 flex bg-aside">
									<div class="ml-auto space-x-2">
										<button
											class="
												justify-center
												hover:bg-content hover:border
												active:bg-content-dark active:border-weakest
												focus:outline-none
												px-3
												py-1
												min-w-[10ch]
											"
											>Back</button
										>
										<button
											class="
												theme theme-dark
												justify-center
												bg-primary
												hover:bg-hover hover:border-stronger
												active:bg-primary-dark active:border-weakest
												border
												focus:outline-none
												px-3
												py-1
												min-w-[10ch]
											"
											>Done</button
										>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ssot from '../SSOT.json';

import ExamplesGrid from './Examples-grid.vue';

export default defineComponent({
	data() {
		return {
			ssot: ssot,
			sizes: ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
			// sizes: ['0', '1', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
			fullColorsList: [...ssot.colors.list, ...ssot.layoutColors.list],
			fullBorderColorsList: [
				...[{ name: '' }], // Default color
				...ssot.colors.list,
			],
		};
	},
	components: {
		ExamplesGrid,
	},
	computed: {},
});
</script>
