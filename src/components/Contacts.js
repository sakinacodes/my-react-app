import React from 'react'
import { useState, useEffect } from 'react'
import Contact from './Contact'
const Contacts = () => {
  const [contacts, setshowAddTask] = useState([
    { id: 1, name: 'Jon Doe', email: 'jon@gmail.com', phone: '333-333-333' },
    { id: 2, name: 'Smith Williams', email: 'Williams@gmail.com', phone: '222-222-2222' },
    { id: 3, name: 'Karen Jonson', email: 'Jonson@gmail.com', phone: '222-222-222' }
  ])

  return (
    <div>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  )
}
export default Contacts
