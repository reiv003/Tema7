<template>
	<div v-if="loading">...</div>
	<pre v-else> {{ JSON.stringify(result, null, 3) }} </pre>
</template>

<script>
	// import sanityClient from '@sanity/client';
	// import sanity from '../sanity.js';
	import query from '../groq/home.groq?raw';
	import sanityMixin from '../mixins/sanityMixin.js';
	import metaMixin from '../mixins/metaMixin.js';

	// const sanity = sanityClient({
	// 	projectId: 'm8b976tf',
	// 	dataset: 'production',
	// 	apiVersion: '2022-03-30',
	// 	useCdn: false
	// })

	export default {
		mixins: [sanityMixin, metaMixin],
		// data() {
		// 	return {
		// 		loading: true,
		// 		result: null
		// 	}
		// },

		async created() {
			await this.sanityFetch(query, { documentType: 'project' })
		// 	// const query = `*[_type == $type]`
		// 	const params = { type: 'product' };

			// this.result = await sanity.fetch(query, params);
			// this.loading = false;

			/* head tags */
			// document.title = 'Front page';
		}
	};
</script>

<style>
	
</style>