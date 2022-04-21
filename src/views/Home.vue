<template>
	<div v-if="loading">...</div>
	<pre v-else> {{ JSON.stringify(result, null, 3) }} </pre>
</template>

<script>
	import query from '../groq/home.groq?raw';
	import viewMixin from '../mixins/viewMixin.js';

	export default {
		mixins: [viewMixin],


		async created() {
			await this.sanityFetch(query, {
				documentType: 'product'
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