import type { S3ClientConfig } from '@aws-sdk/client-s3'
import { S3Client } from '@aws-sdk/client-s3'

import deleteHook from './hooks/delete'
import uploadHook from './hooks/upload'
import type { S3UploadCollectionConfig } from './types'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const pluginPayloadS3Upload = (s3Client?: S3Client | S3ClientConfig) => {
  const client = s3Client instanceof S3Client ? s3Client : new S3Client(s3Client)
  return payloadConfig => {
    const uploadCollections = payloadConfig.collections.filter(collection => {
      return collection.upload?.s3 != null
    })
    uploadCollections.forEach((collection: S3UploadCollectionConfig) => {
      if (collection.hooks == null) collection.hooks = {}
      if (collection.hooks.beforeChange == null) {
        collection.hooks.beforeChange = []
      }
      if (collection.hooks.afterDelete == null) {
        collection.hooks.afterDelete = []
      }
      collection.hooks.beforeChange.push(uploadHook(client, collection))
      collection.hooks.afterDelete.push(deleteHook(client, collection))
      // comply with payload strict checking
      delete collection.upload.s3
    })
    return payloadConfig
  }
}

export default pluginPayloadS3Upload
