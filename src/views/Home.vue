<template>
	<div v-if="loading">...</div>
	<pre v-else> {{ JSON.stringify(result, null, 3) }} </pre>
</template>

<script>
	import sanityClient from '@sanity/client';

	const sanity = sanityClient({
		projectId: '32td7jzv',
		dataset: 'production',
		apiVersion: '2022-03-30',
		useCdn: false
	})

	export default {
		data() {
			return {
				loading: true,
				result: null
			}
		},

		async created() {
			const query = `*[_type == $type]`
			const params = { type: 'project' };

			this.result = await sanity.fetch(query, params);
			this.loading = false;

			/* head tags */
			document.title = 'Front page';
		}
	};
</script>

<style>
	
</style>