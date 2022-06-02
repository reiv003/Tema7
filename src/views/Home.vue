<template>
<div class="home__container">
	<div v-if="result"> 
	
			<h1>Velkommen til oss!</h1>
			<div class="home__banner-image"><img src="/assets/images/chuttersnap-_EFvjSgbw1c-unsplash.jpg"/></div>
			<div class="home__blurb">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est quaerat fugiat quidem dicta voluptatibus nisi mollitia nam? Obcaecati magni molestiae corporis similique itaque maxime vero, fuga dolorum, tenetur unde facilis?</div>
			<div>
				<ul class="home__product-list">
					<li v-for="product in result">
						<RouterLink :to="`${product.slug.current}`">
						{{ product.name }}	
						</RouterLink>
						<img :src="`${product.displayImage.asset.url}`"/>
					
					</li>
				</ul>
			</div>
		</div>

	</div>
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
		}
	}
</script>

<style>

.home__product-list {
	display: flex;
	list-style: none;
	padding: var(--general-spacing);
	margin: var(--general-spacing);
	
}

.home__product-list li img {
	max-height: 10em;
	border: var(--image-border);
}

.home__banner-image {
	height: 20em;

	grid-column: 0 / span 12;
}

.home__banner-image img {
	height: 100%;
	width: 100%;
	object-fit: cover;
}

.home__blurb {
	margin: var(--general-spacing);
}
	
</style>