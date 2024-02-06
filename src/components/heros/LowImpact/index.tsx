import React from 'react'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../elements/Gutter'
import RichText from '../../elements/RichText'
import { VerticalPadding } from '../../elements/VerticalPadding'

import classes from './index.module.scss'

export const LowImpactHero: React.FC<Page['hero']> = ({ richText }) => {
  return (
    <Gutter className={classes.lowImpactHero}>
      <div className={classes.content}>
        <VerticalPadding>
          <RichText className={classes.richText} content={richText} />
        </VerticalPadding>
      </div>
    </Gutter>
  )
}
