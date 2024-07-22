import { CollectionConfig, FieldHook } from 'payload'

export const MediaCollection: CollectionConfig = {
  slug: 'media',
  upload: true,
  fields: [
    {
      name: 'text',
      type: 'text',
    },
  ],
}