import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import person from './documents/person'
import books from './documents/books'
import test from './documents/test'
import screening from './documents/screening'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    person, books, test, screening
  ])
})


