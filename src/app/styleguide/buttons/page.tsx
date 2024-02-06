import React, { Fragment } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

import { CallToActionBlock } from '../../../components/blocks/CallToAction'
import { Button } from '../../../components/elements/Button'
import { Gutter } from '../../../components/elements/Gutter'
import { VerticalPadding } from '../../../components/elements/VerticalPadding'
import { mergeOpenGraph } from '../../../helpers/mergeOpenGraph'

export default async function ButtonsPage() {
  return (
    <Fragment>
      <Gutter>
        <p>
          <Link href="/styleguide">Styleguide</Link>
          {' / '}
          <span>Buttons</span>
        </p>
        <h1>Buttons</h1>
      </Gutter>
      <Gutter>
        <VerticalPadding bottom="large" top="none">
          <Button label="Default Button" appearance="default" />
          <br /> <br />
          <Button label="Primary Button" appearance="primary" />
          <br /> <br />
          <Button label="Secondary Button" appearance="secondary" />
        </VerticalPadding>
      </Gutter>
    </Fragment>
  )
}

export const metadata: Metadata = {
  title: 'Buttons',
  description: 'Styleguide for Buttons',
  openGraph: mergeOpenGraph({
    title: 'Buttons',
    url: '/styleguide/buttons',
  }),
}
