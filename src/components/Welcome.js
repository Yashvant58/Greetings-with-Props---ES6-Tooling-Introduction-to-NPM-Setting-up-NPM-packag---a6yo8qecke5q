import PropTypes from 'prop-types'
import React from 'react'

function Welcome(props) {
  return (
    <div className='main'>
        <h1>Hey !{props.name}</h1>
        <h2>Welcome to Newton School.</h2>
    </div>
  )
}

export default Welcome
