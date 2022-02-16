import React from 'react'
import PropTypes from 'prop-types'
export const Header = (props) => {
  return (
    <div className='container'>
      <div className='flex justify-between  px-7 py-3 bg-red-500'>
        <h1 className='text-2xl text-white'> {props.branding} </h1>
        <h1 className='text-2xl text-red-100'>Home</h1>
      </div>
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
