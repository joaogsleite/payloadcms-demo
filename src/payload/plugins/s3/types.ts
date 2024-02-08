/* eslint-disable @typescript-eslint/consistent-type-definitions */
import type { Buffer } from 'node:buffer'
import type { IncomingUploadType } from 'payload/dist/uploads/types'
import type { CollectionConfig } from 'payload/types'

export type S3UploadConfig = {
  bucket: string
  prefix?: string | Function
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  commandInput?: any
}

export type S3IncomingUploadType = {
  s3: S3UploadConfig
} & IncomingUploadType

export type S3UploadCollectionConfig = {
  upload: S3IncomingUploadType
} & CollectionConfig

export type File = {
  filename: string
  mimeType?: string
  buffer: Buffer
}
