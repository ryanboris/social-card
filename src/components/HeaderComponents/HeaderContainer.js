/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import ImageThumbnail from './ImageThumbnail'
import HeaderTitle from './HeaderTitle'
import HeaderContent from './HeaderContent'

export default function HeaderContainer() {
  return (
    <React.Fragment>
      <div css={{ display: 'flex' }}>
        <ImageThumbnail />
        <HeaderTitle />
      </div>
      <HeaderContent />
    </React.Fragment>
  )
}
