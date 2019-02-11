/* eslint-disable react/jsx-closing-bracket-location */
/** @jsx jsx */
// eslint-disable-next-line
import React from 'react'
import { jsx } from '@emotion/core'
import css from '@emotion/css/macro'

const styleImg = css`
  width: 3%;
  height: 3%;
  display: block;
`
export default function ImageThumbnail() {
  return (
    <img
      src="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png"
      alt="lambda logo"
      css={styleImg}
    />
  )
}
