export default {
	title: 'User',
	name: 'user',
	type: 'document',
	fields: [
		{
			title: 'Name',
			name: 'name',
			type: 'string'
		},
		{
			title: 'E-mail',
			name: 'email',
			type: 'string'
		},
		{
			title: 'Order History',
			name: 'orderHistory',
			type: 'array',
			of: [{
				type: 'reference',
				to: [{ type: 'order' }]
			}]
		}
	]
}