import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'


import category from './documents/category.js'
import order from './documents/order.js'
import product from './documents/product.js'
import user from './documents/user.js'

import client from './documents/client.js'
import collaborator from './documents/collaborator.js'
import project from './documents/project.js'

import imageCaption from './types/imageCaption.js'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    product, order, category, user, imageCaption
  ])
})


