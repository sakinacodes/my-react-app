import React from 'react'
import PropTypes from 'prop-types'
;<link rel='stylesheet' href='../src/styles/custom.css' />
const Contact = (props) => {
  return (
    <div>
      <div className='p-8'>
        <h1 className='text-4xl '> {props.name} </h1>
        <ul className='list-disc px-14 list-outside  text-red-600 text-bold '>
          <li className=''>Email: {props.email} </li>
          <li className=''>Phone: {props.phone}</li>
        </ul>
      </div>
    </div>
  )
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
}
export default Contact
