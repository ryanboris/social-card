/** @jsx jsx */
// eslint-disable-next-line
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import css from '@emotion/css/macro'
import { jsx } from '@emotion/core'
import moment from 'moment'

// Component Styles

const styleSpan1 = css`
  font-size: 1.2rem;
  width: 8vw;
  margin-right: 3%;
`

const styleSpan2 = css`
  margin: 18px 0 0 0;
  color: darkgrey;
  font-size: 0.85rem;
`

const styleSpan3 = css`
  margin: 18px 0 0 0vw;
  color: darkgrey;
  font-size: 0.85rem;
`
const styleIcon = css`
  color: darkgray;
  transform: scale(0.2) translate(5px, 5px);
`

// Component

export default function HeaderTitle() {
  return (
    <React.Fragment>
      <span css={styleSpan1}>Lambda School</span>
      <span css={styleSpan2}>@LambdaSchool</span>
      <FontAwesomeIcon icon={faCircle} css={styleIcon} />
      <span css={styleSpan3}>{moment().format('Do MMM')}</span>
    </React.Fragment>
  )
}
