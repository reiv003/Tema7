import sanityClient from '@sanity/client';

export default sanityClient({
	projectId: 'm8b976tf',
	dataset: 'production',
	apiVersion: '2022-04-20',
	useCdn: false
});