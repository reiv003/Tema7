export default {
	title: 'Order',
	name: 'order',
	type: 'document',
	fields: [
		{
			title: 'Ordered By User',
			name: 'orderedByUser',
			type: 'reference',
			to: [{ type: 'user' }]
		},
		{
			title: 'Ordered Items',
			name: 'items',
			type: 'array',
			of: [{
				type: 'object',
				fields: [
					{
						title: 'Product',
						name: 'product',
						type: 'reference',
						to: [{ type: 'product' }]
					},
					{
						title: 'Quantity',
						name: 'quantity',
						type: 'number'
					}
				]
			}]
		},
		{
			title: 'Date Ordered',
			name: 'date',
			type: 'datetime',
			options: {
				dateFormat: 'DD-MMMM-YYYY'
			}
		}
	]
}