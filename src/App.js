import React from 'react'
import './styles/main.css'
import Contacts from './components/Contacts'
import Header from './components/Header'
;<link rel='stylesheet' href='../src/styles/custom.css' />

function App() {
  return (
    <div className=''>
      <Header branding='Contact Manager1' />
      <Contacts />
    </div>
  )
}

export default App
