import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import category from './documents/category'
import order from './documents/order'
import product from './documents/product'
import user from './documents/user'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    product, category, order, user
  ])
})


