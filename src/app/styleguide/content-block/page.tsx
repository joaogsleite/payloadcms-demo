import React, { Fragment } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

import { ContentBlock } from '../../../components/blocks/Content'
import { Gutter } from '../../../components/elements/Gutter'
import { VerticalPadding } from '../../../components/elements/VerticalPadding'
import { mergeOpenGraph } from '../../../helpers/mergeOpenGraph'

export default async function ContentBlockPage() {
  return (
    <Fragment>
      <Gutter>
        <p>
          <Link href="/styleguide">Styleguide</Link>
          {' / '}
          <span>Content Block</span>
        </p>
        <h1>Content Block</h1>
      </Gutter>
      <VerticalPadding bottom="large" top="none">
        <ContentBlock
          blockType="content"
          columns={[
            {
              size: 'full',
              richText: [
                {
                  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                },
              ],
            },
          ]}
        />
      </VerticalPadding>
    </Fragment>
  )
}

export const metadata: Metadata = {
  title: 'Content Block',
  description: 'Styleguide for the Content Block',
  openGraph: mergeOpenGraph({
    title: 'Content Block',
    url: '/styleguide/content-block',
  }),
}
