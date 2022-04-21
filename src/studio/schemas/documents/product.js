export default {
	title: 'Product',
	name: 'product',
	type: 'document',
	fields: [
		{
			title: 'Name',
			name: 'name',
			type: 'string'
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'name'
			}
		},
		{
			title: 'Description',
			name: 'description',
			type: 'text'
		},
		{
			title: 'Display Image',
			name: 'displayImage',
			type: 'image',
			options: {
				hotspot: true
			}
		},
		{
			title: 'Extra Images',
			name: 'extraImages',
			type: 'array',
			of: [{ type: 'image' }]
		},
		{
			title: 'Price',
			name: 'price',
			type: 'number'
		},
		{
			title: 'Category',
			name: 'category',
			type: 'reference',
			to: { type: 'category' }
		},
		{
			title: 'Stock',
			name: 'stock',
			type: 'number'
		},
		{
			title: 'Specification',
			name: 'specification',
			type: 'object',
			fields: [
				{ title: 'Length', name: 'length', type: 'string' },
				{ title: 'Casing', name: 'casing', type: 'string' },
				{ title: 'Spindle', name: 'spindle', type: 'string' },
				{ title: 'Density', name: 'density', type: 'string' },
				{ title: 'Weight', name: 'weight', type: 'string' },
				{ title: 'Production Year', name: 'productionYear', type: 'number' },
				{
					title: 'Warranty',
					name: 'warranty',
					type: 'array',
					of: [{ type: 'string' }],
					options: {
						list: [
							{ title: '3 years', value: '3yrs' },
							{ title: '5 years', value: '5yrs' },
							{ title: '8 years', value: '8yrs' },
							{ title: '12 years', value: '12yrs' },
							{ title: '20 years', value: '25yrs' }
						]

					}
				},
			]
		},

	]
}