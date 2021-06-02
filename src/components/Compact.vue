<template>
	<div class="flex">
		
		<div class="">
			<div class="flex-grow rounded-full p10 bg-gradient-to-r from-standout _to-info p-5"></div>
			<div class="flex space-x-2 p-4">
				<template v-for="(shade, index) in ssot.shades" :key="index">
					<div class="p-10 rounded-full bg-secondary" :class="`bg-${shade}`"></div>
				</template>
			</div>
			<div class="p-4 bg-lines-bold bg-lines-angle-0 space-y-2">
				<div class="flex space-x-2">
					<template v-for="(transparency, index) in ssot.transparencies" :key="index">
						<div
							class="p-10 rounded-full bg-secondary transition duration-200 hover:bg-a-strong"
							:class="`bg-a-${transparency}`"
						></div>
					</template>
				</div>
				<div class="flex space-x-2 break-all relative">
					<template v-for="(blur, index) in ssot.blurs.list" :key="index">
						<div
							class="p-10 rounded-full backdrop-filter  transition duration-200 hover:backdrop-blur-0 bg-secondary bg-a-medium"
							:class="`backdrop-blur-${blur.name}`"
						></div>
					</template>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import ssot from '../SSOT';
export default defineComponent({
	data() {
		return {
			ssot: ssot,
			abcies: `‘?’“!”(%)[#]{@}/&\<-+÷×=>®©$€£¥¢:;,.*`,
		};
	},
	computed: {
		shades() {
			return ssot.modularShades.filter((shade: string) => shade !== 'default');
		},
	},
});
</script>
