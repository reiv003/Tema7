import Home from './views/Home.vue';
import ProductPage from './views/ProductPage.vue';
import CategoryPage from './views/CategoryPage.vue';
import NotFound from './components/NotFound.vue';

export default [
	{ name: 'product', path: '/:productSlug', component: ProductPage },
	{ name: 'category', path: '/:categorySlug', component: CategoryPage },
	{ name: 'home', path: '/', component: Home },
	/* This 404 redirect doesn't seem to work, possibly because of the other 	dynamic routes that are defined here. This doesn't redirect to the 			NotFound component, any non-existent urls simply don't load any content. 	Not sure how to fix, probably another approach altogether is needed.*/
	{ name: 'notFound', path: '/:pathMatch(.*)*', component: NotFound }
]
