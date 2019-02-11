/** @jsx jsx */
// eslint-disable-next-line
import React from 'react'
import css from '@emotion/css/macro'
import { jsx } from '@emotion/core'

const container = css`
  margin: 10px 0 0 0;
  padding: 0;
`
export default function HeaderContent() {
  return (
    <React.Fragment>
      <p css={container}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </React.Fragment>
  )
}
