import type { Field } from 'payload/types'

import { MyCustomSelect } from './component'

export const CountrySelectField: Field = {
  name: 'country',
  type: 'text',
  admin: {
    components: {
      Field: MyCustomSelect,
    },
  },
}
