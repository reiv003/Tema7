import Home from './views/Home.vue';
import ProjectPage from './views/ProjectPage.vue';
import ProductPage from './views/ProductPage.vue';
import CategoryPage from './views/CategoryPage.vue';

export default [
	// { name: 'page', path: '/:projectSlug', component: ProjectPage },
	{ name: 'product', path: '/:productSlug', component: ProductPage },
	{ name: 'category', path: '/:categorySlug', component: CategoryPage },
	{ name: 'home', path: '/', component: Home }
]
