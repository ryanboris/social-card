/** @jsx jsx */

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { jsx } from '@emotion/core'
import moment from 'moment'

export default function HeaderTitle() {
  return (
    <div>
      <span css={{ fontSize: '1.2rem', width: '8vw', margin: '15px 0 0 1vw' }}>
        Lambda School
      </span>
      <span
        css={{
          margin: '18px 0.5vw 0 1vw',
          color: 'darkgrey',
          fontSize: '0.85rem',
        }}
      >
        @LambdaSchool
      </span>
      <span>
        <FontAwesomeIcon
          icon={faCircle}
          css={{
            color: 'darkgray',
            transform: 'scale(0.3)',
            margin: '0',
          }}
        />
      </span>
      <span
        css={{
          margin: '18px 0 0 0.5vw',
          color: 'darkgrey',
          fontSize: '0.85rem',
        }}
      >
        {moment().format('Do MMM')}
      </span>
    </div>
  )
}
