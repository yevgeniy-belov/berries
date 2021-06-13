<template>
	<div class="scroll-snap-type-mandatory overflow-auto h-screen">
		<div class="bg-canvas flex items-center scroll-snap-align-start h-screen">
			<div class="max-w-5xl mx-auto text-center cols">
				<h1 class="text-2xl font-semibold my-2">Laws</h1>
				|
				<h1 class="text-2xl font-semibold my-2">Elements</h1>
				|
				<h1 class="text-2xl font-thin text-weakest my-2">Components</h1>
				|
				<h1 class="text-2xl font-thin text-weakest my-2">Modules</h1>
				|
				<h1 class="text-2xl font-thin text-weakest my-2">Applications</h1>
			</div>
		</div>
		<div class="bg-canvas flex items-center scroll-snap-align-start h-screen theme theme-dark-primary">
			<div class="max-w-5xl mx-auto text-center">
				<h1 class="text-5xl font-semibold mb-3 text-brand">{{ ssot.about.system.name }}</h1>
				<!-- <h1 class="text-2xl font-thin">Systematized UI <b>elements</b></h1> -->
				<h1 class="text-2xl font-thin">{{ ssot.about.system.description }}</h1>
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
							<div class="font-mono font-medium"> {{ shade.name }}</div>
						</template>
					</div>
					<div class="">
						<div class="font-black text-strongest mb-4">Strength</div>
						<template v-for="(strength, index) in ssot.border.strength.list" :key="index">
							<div class="font-mono font-medium"> {{ strength.name }}</div>
						</template>
					</div>
					<div class="">
						<div class="font-black text-strongest mb-4">Size</div>
						<template v-for="(size, index) in sizes" :key="index">
							<div class="font-mono font-medium"> {{ size }}</div>
						</template>
					</div>
					<div class="">
						<div class="font-black text-strongest mb-4">Weight</div>
						<template v-for="(width, index) in ssot.border.width.list" :key="index">
							<div class="font-mono font-medium"> {{ width.name }}</div>
						</template>
					</div>
				</div>
			</div>
		</div>
		<div class="bg-canvas flex justify-center items-center scroll-snap-align-start h-screen">
			<div class="container">
				<div class="text-center flex flex-col mb-10">
					<div class="text-strong m-auto max-w-[40ch] text-4xl font-light mb-5"> Utility First </div>
					<div class="text-xl font-light">Build custom designs without writing CSS. At all.</div>
				</div>
				<div class="flex justify-center">
					<div class="flex flex-col w-1/2 shadow-xl h-96">
						<div class="flex-0 border-b px-4 py-2 theme theme-dark-primary font-light uppercase">Title</div>
						<div class="flex flex-1 flex-row">
							<div class="flex-0 flex flex-col border-r theme theme-dark-primary p-6 text-xs">
								
								<div class="flex items-center w-28">
									<div class="flex items-center justify-center h-6 w-6 bg-[#ffffff] rounded-full"><svg
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
									/>
								</svg></div>
									<div class="ml-2 uppercase font-light">Step 1</div>
								</div>
								<div class="h-10 w-0 ml-[11px] my-1 border-r border-r-bold border-strongest"></div>
								<div class="flex items-center w-28">
									<div class="flex items-center justify-center h-6 w-6 bg-[#ffffff] rounded-full"><svg
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
									/>
								</svg></div>
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
												hover:bg-content
												hover:border
												active:bg-content-dark
												active:border-weakest
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
												hover:bg-hover
												hover:border-stronger
												active:bg-primary-dark
												active:border-weakest
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
				<div class="text-center max-w-[40ch] m-auto mb-16">
					<div class="text-strong text-4xl font-light mb-5">
						{{ ssot.themes.about.title }}
					</div>
					<div class="text-weak text-xl font-light">{{ ssot.themes.about.body }}</div>
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
		<div class="flex items-center scroll-snap-align-start h-screen">
			<div
				class="grid max-w-5xl mx-auto auto-rows-max -gap-2"
				:class="`grid-cols-${ssot.typography.strength.list.length}`"
			>
				<template v-for="(size, index) in ssot.typography.sizes.list" :key="index">
					<template v-for="(strength, index) in ssot.typography.strength.list" :key="index">
						<div class="-border px-3" :class="`text-${size.name} text-${strength.name}`"> Texty </div>
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
								class="
									w-12
									h-12
									rounded-full
									bg-content
									transition
									duration-xs
									hover:shadow-xl hover:shadow-strong
								"
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
		<div class="flex theme theme-dark-primary bg-canvas items-center scroll-snap-align-start h-screen">
			<div class="max-w-5xl mx-auto">
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
												class="w-12 h-12 rounded-full"
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
console.log(ssot.colors.list);

export default defineComponent({
	data() {
		return {
			ssot: ssot,
			sizes: ['0', '1', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
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
