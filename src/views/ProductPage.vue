<template>
	<!-- 
		https://forum.vuejs.org/t/typeerror-cannot-read-property-title-of-null/23803/9

		Have to use v-if here to avoid error "cannot read properties of null". Though the console throws errors and warnings, the values still show up on the site. Probably because the values are not initialized, but are filled once the data loads in. Defining the values as null under return or script did not make a difference.
	-->
<div class="router__container">
	<div v-if="result"> 

		<h1> {{ result.name }} </h1>
		<div> {{ result.description }} </div>
		<!-- The product images (and inspiration for the site) comes from this website originally:  https://www.sigumfagerberg.no/ -->
		<div> <img :src="`${result.displayImage.asset.url}`"/></div>
		<div>{{ result.price }}</div>
		<div> {{ result.stock }} </div>
		<div> {{ result.specification }} </div>
	
		<div></div>

	</div>
</div>
</template>

<script>
	import query from '../groq/projectpage.groq?raw';
	import viewMixin from '../mixins/viewMixin.js';

	import Sidebar from '../components/Sidebar.vue';

	export default {
		/* Removed sidebar since I couldn't get the placement correct in the grid, and it was pushing the product content too far down. */
		components: {
			Sidebar
		},

		mixins: [viewMixin],
	

		async created() {
			await this.sanityFetch(query, { slug: this.$route.params.productSlug })
		}
	}

</script>

<style>

.router__container img {
	max-height: 40em;
}

</style>