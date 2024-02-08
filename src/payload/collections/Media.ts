import { slateEditor } from '@payloadcms/richtext-slate'
import type { CollectionConfig } from 'payload/types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Media: CollectionConfig & { upload: { s3: any } } = {
  slug: 'media',
  upload: {
    staticURL: '/assets',
    staticDir: 'assets',
    disableLocalStorage: true,
    s3: {
      bucket: 'payloadcms-demo',
      prefix: 'media',
      commandInput: {
        ACL: 'public-read',  
      },
    },
    adminThumbnail: ({ doc }) =>
      `https://payloadcms-demo.s3.eu-west-2.amazonaws.com/media/${doc.filename}`,
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'caption',
      type: 'richText',
      editor: slateEditor({
        admin: {
          elements: ['link'],
        },
      }),
    },
    {
      name: 'url',
      type: 'text',
      access: {
        create: () => false,
      },
      admin: {
        disabled: true,
      },
      hooks: {
        afterRead: [
          ({ data: doc }) =>
            `https://payloadcms-demo.s3.eu-west-2.amazonaws.com/media/${doc.filename}`,
        ],
      },
    },
  ],
}
