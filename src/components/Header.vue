<template>
	<header>
		<RouterLink :to="'/'">
		<!-- Copy As/Export to SVG in Figma renders the stroke thinner for some reason, making the logo less readable. Using png to avoid this issue for the time being. -->
			<div><button><img src="/assets/images/logo.png"/></button></div>
		</RouterLink>
	</header>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style>
	
</style>	