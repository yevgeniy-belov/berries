<template>
	<table>
		<thead>
			<tr>
				<th class="w-16 font-light text-weakest pb-4" v-for="(strength, index) in cols" :key="index">{{
					strength.name
				}}</th>
			</tr>
			<tr>
				<th class="w-30"></th>
			</tr>
		</thead>
		<tbody>
			<template v-for="(color, index) in rows" :key="index">
				<tr>
					<template v-for="(strength, index) in cols" :key="index">
						<td class="relative py-2">
							<div class="flex items-center justify-center">
								<div
									class="w-12 h-12 rounded-full"
									:class="`${example} border${color.name !== '' ? `-${color.name}` : ''}-${
										strength.name
									}`"
								></div>
							</div>
						</td>
					</template>
					<td class="w-16 font-light text-weakest pl-4"> {{ color.name }}</td>
				</tr>
			</template>
		</tbody>
	</table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	el: 'examples-grid',
	props: ['example', 'rows', 'cols'],
	data() {},
	computed: {},
});
</script>
