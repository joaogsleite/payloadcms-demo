'use client'
import React from 'react'
import { useLivePreview } from '@payloadcms/live-preview-react'

import { Blocks } from '../../blocks'
import { Hero } from '../../heros'

// Fetch the page in a server component, pass it to the client component, then thread it through the hook
// The hook will take over from there and keep the preview in sync with the changes you make
// The `data` property will contain the live data of the document
export const PageClient: React.FC<any> = ({ data: initialData }: { data: any }) => {
  const { data } = useLivePreview<any>({
    initialData,
    serverURL: 'http://localhost:3000',
    apiRoute: '/api/preview',
    depth: 2, // Ensure that the depth matches the request for `initialPage`
  })
  const { hero, layout } = data
  return (
    <React.Fragment>
      <Hero {...hero} />
      <Blocks
        blocks={layout}
        disableTopPadding={!hero || hero?.type === 'none' || hero?.type === 'lowImpact'}
      />
    </React.Fragment>
  )
}
