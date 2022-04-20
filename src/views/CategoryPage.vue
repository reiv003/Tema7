<template>
	<div v-if="loading">...</div>
	<pre v-else> {{ JSON.stringify(result, null, 3) }} </pre>
</template>

<script>
	import sanityClient from '@sanity/client';

	const sanity = sanityClient({
		projectId: 'm8b976tf',
		dataset: 'production',
		apiVersion: '2022-04-20',
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
				slug: this.$route.params.categorySlug
			};

			this.result = await sanity.fetch(query, params);
			this.loading = false;

			document.title = this.result.name;
		}
	}

</script>

<style>

</style>