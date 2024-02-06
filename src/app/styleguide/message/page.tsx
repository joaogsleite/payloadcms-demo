import React, { Fragment } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

import { Gutter } from '../../../components/elements/Gutter'
import { Message } from '../../../components/elements/Message'
import { VerticalPadding } from '../../../components/elements/VerticalPadding'
import { mergeOpenGraph } from '../../../helpers/mergeOpenGraph'

export default async function MessageComponentPage() {
  return (
    <Fragment>
      <Gutter>
        <p>
          <Link href="/styleguide">Styleguide</Link>
          {' / '}
          <span>Message Component</span>
        </p>
        <h1>Message Component</h1>
      </Gutter>
      <Gutter>
        <VerticalPadding bottom="large" top="none">
          <Message message="This is a message" />
          <br />
          <Message error="This is an error" />
          <br />
          <Message success="This is a success" />
          <br />
          <Message warning="This is a warning" />
        </VerticalPadding>
      </Gutter>
    </Fragment>
  )
}

export const metadata: Metadata = {
  title: 'Message Component',
  description: 'Styleguide for message component.',
  openGraph: mergeOpenGraph({
    title: 'Message Component',
    url: '/styleguide/message',
  }),
}
