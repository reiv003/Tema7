<template>
	<!-- <div v-if="loading">...</div> -->
	<!-- <pre v-else> {{ JSON.stringify(result, null, 3) }} </pre> -->

	<!-- 
		https://forum.vuejs.org/t/typeerror-cannot-read-property-title-of-null/23803/9

		Må bruke v-if her for å unngå feilmelding "cannot read properties of null". Får feil og warnings, men verdiene vises likevel. Sannsynligvis fordi verdiene er ikke initialisert for seg selv, men fylles kun inn med data når result er lastet inn. Men å definere verdiene som null først under return eller under script gjorde ikke noen forskjell. 
	-->

	<div v-if="result"> 
		<div> {{ result.name }} </div>
		<div> {{ result.description }} </div>
		<!-- <div><img src="`${result.displayImage}`"/></div> -->
		<!-- <div> {{ result.extraImages }} </div> -->
		<div> <img :src="`${result.displayImage.asset._ref}`"/></div>
		<div>{{ result.price }}</div>
		<div> {{ result.stock }} </div>
		<div> {{ result.specification }} </div>
	
		<div></div>

	</div>
	<!-- <div> {{ JSON.stringify(result.description, null, 3) }} </div> -->
</template>

<script>
	import query from '../groq/projectpage.groq?raw';
	import viewMixin from '../mixins/viewMixin.js';

	export default {
		mixins: [viewMixin],
	

		async created() {
			await this.sanityFetch(query, { slug: this.$route.params.productSlug })
		}
	}

</script>

<style>

</style>