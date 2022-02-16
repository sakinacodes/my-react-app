import React from 'react'
import PropTypes from 'prop-types'
export const Header = (props) => {
  return (
    <div>
      {' '}
      <h1 className='text-4xl font-bold'> {props.branding} </h1>{' '}
    </div>
  )
}
Header.defaultProps = {
  branding: 'My Application'
}

Header.propTypes = {
  branding: PropTypes.string.isRequired
}
export default Header
