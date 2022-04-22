<template>
	<div v-if="result"> 
		<div> {{ result.name }} </div>
	
		<div></div>

	</div>
</template>

<script>
	import query from '../groq/home.groq?raw';
	import viewMixin from '../mixins/viewMixin.js';

	export default {
		mixins: [viewMixin],


		async created() {
			await this.sanityFetch(query, {
				documentType: 'user'
			});

			this.metaTags({
				title: 'HEI HOME.VUE'
			})
		// 	// const query = `*[_type == $type]`
		// 	const params = { type: 'product' };

			// this.result = await sanity.fetch(query, params);
			// this.loading = false;
		}
	}
</script>

<style>
	
</style>