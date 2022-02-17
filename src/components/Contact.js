import React from 'react'
import PropTypes from 'prop-types'
import { FaAngleDown } from 'react-icons/fa'
import { useState } from 'react'
;<link rel='stylesheet' href='../src/styles/custom.css' />
const Contact = (props) => {
  const { name, email, phone } = props.contact

  const [ShowDetail, setShowDetail] = useState(false)

  const Showit = () => {
    setShowDetail(!ShowDetail)
  }
  return (
    <div className='container p-5'>
      <div className=' flex flex-col rounded-sm p-4 border-2'>
        <h1 className='text-xl flex flex-row justify-center items-center font-bold p-2'>
          {name}
          <FaAngleDown
            className='text-lg'
            onClick={Showit}
            style={{ color: 'red', cursor: 'pointer', fontSize: '2rem' }}
          />
        </h1>
        {ShowDetail && (
          <ul className='list-none list-outside'>
            <li className='border-2 rounded-t-sm p-2'>Email: {email} </li>
            <li className='border-x-2 p-2 rounded-b-sm border-b-2'>Phone: {phone}</li>
          </ul>
        )}
      </div>
    </div>
  )
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
}
export default Contact
