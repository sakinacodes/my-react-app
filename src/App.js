import React from 'react'
import './styles/main.css'
import Contact from './components/Contact'
import Header from './components/Header'
;<link rel='stylesheet' href='../src/styles/custom.css' />

function App() {
  return (
    <div>
      <Header branding='Contact Manager1' />
      <Contact name='Sakina Mosavi' email='sakina@gmail.com' phone='245522' />
      <Contact name='khadija' email='khadija@gmail.com' phone='245522' />
      <Contact name='zahra' email='zahra@gmail.com' phone='245522' />
    </div>
  )
}

export default App
