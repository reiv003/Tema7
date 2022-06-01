<template>
	<header>
		<RouterLink :to="'/'">
		<!-- Copy As/Export to SVG in Figma renders the stroke thinner for some reason, making the logo less readable. Using png to avoid this issue for the time being. -->
			<div><button aria-label="Hjem"><img src="/assets/images/logo.png"/></button></div>
		</RouterLink>
		<nav>
			<ul>
				<li>Produkter</li>
				<li>Om oss</li>
				<li>Kundesider</li>
			</ul>
		</nav>
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

header {
	display: flex;
	justify-content: space-between;
}

header ul {
	display: flex;
}

header ul li {
	padding: var(--general-spacing);
	margin: var(--general-spacing);
	list-style: none;
}

	
</style>	