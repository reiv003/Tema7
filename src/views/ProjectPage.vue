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
			const query = `*[slug.current == $slug][0]`
			const params = {
				slug: this.$route.params.projectSlug
			 };

			this.result = await sanity.fetch(query, params);
			this.loading = false;
		}
	};
</script>

<style>

</style>