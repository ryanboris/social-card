/** @jsx jsx */
// eslint-disable-next-line
import React from 'react'
import { jsx } from '@emotion/core'
import css from '@emotion/css/macro'
import ImageThumbnail from './ImageThumbnail'
import HeaderTitle from './HeaderTitle'
import HeaderContent from './HeaderContent'

const container = css`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`

const titleAndContent = css`
  width: 50vw;
  text-align: justify;
  margin-left: 2%;
`
const content = css`margin-left: 200px;`
export default function HeaderContainer() {
  return (
    <div css={container}>
      <ImageThumbnail />
      <div css={titleAndContent}>
        <HeaderTitle />
        <HeaderContent css={content} />
      </div>
    </div>
  )
}
