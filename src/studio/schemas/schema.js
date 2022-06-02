import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import category from './documents/category.js'
import order from './documents/order.js'
import product from './documents/product.js'
import user from './documents/user.js'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    product, order, category, user,
  ])
})


