<template>
	<div class="*absolute inset-0 flex">
		<div class="flex">
			<div class="bg-canvas p-10">
				<template v-for="(intensity, index) in ssot.typography.strength.list" :key="index">
					<div class="" :class="`font-bold text-4xl text-${intensity.name}`"> M </div>
				</template>
			</div>
			<div class="bg-aside p-10">
				<template v-for="(intensity, index) in ssot.typography.strength.list" :key="index">
					<div class="" :class="`font-bold text-4xl text-${intensity.name}`"> M </div>
				</template>
			</div>
			<div class="bg-content p-10">
				<template v-for="(intensity, index) in ssot.typography.strength.list" :key="index">
					<div class="" :class="`font-bold text-4xl text-${intensity.name}`"> M </div>
				</template>
			</div>
			<div class="bg-canvas p-10">
				<template v-for="(intensity, index) in ssot.typography.strength.list" :key="index">
					<div class="" :class="`font-bold text-4xl text-primary-${intensity.name}`"> M </div>
				</template>
			</div>
			<div class="bg-aside p-10">
				<template v-for="(intensity, index) in ssot.typography.strength.list" :key="index">
					<div class="" :class="`font-bold text-4xl text-primary-${intensity.name}`"> M </div>
				</template>
			</div>
			<div class="bg-content p-10">
				<template v-for="(intensity, index) in ssot.typography.strength.list" :key="index">
					<div class="" :class="`font-bold text-4xl text-primary-${intensity.name}`"> M </div>
				</template>
			</div>
			<div class="bg-canvas p-10 theme theme-dark-primary">
				<template v-for="(intensity, index) in ssot.typography.strength.list" :key="index">
					<div class="" :class="`font-bold text-4xl text-primary-${intensity.name}`"> M </div>
				</template>
			</div>
			<div class="bg-aside p-10 theme theme-dark-primary">
				<template v-for="(intensity, index) in ssot.typography.strength.list" :key="index">
					<div class="" :class="`font-bold text-4xl text-primary-${intensity.name}`"> M </div>
				</template>
			</div>
			<div class="bg-content p-10 theme theme-dark-primary">
				<template v-for="(intensity, index) in ssot.typography.strength.list" :key="index">
					<div class="" :class="`font-bold text-4xl text-primary-${intensity.name}`"> M </div>
				</template>
			</div>
		</div>
	</div>
	<div
		class="grid auto-rows-max bg-canvas p-12 overflow-auto"
		:class="`grid-cols-${ssot.typography.strength.list.length}`"
	>
		<template v-for="(size, index) in ssot.typography.sizes.list" :key="index">
			<template v-for="(intensity, index) in ssot.typography.strength.list" :key="index">
				<div class="" :class="`text-${size.name} text-${intensity.name}`"> {{ size.name }}: Sphynx </div>
			</template>
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
		};
	},
	computed: {},
});
</script>
