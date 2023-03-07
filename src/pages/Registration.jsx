import React from 'react'
import RegisterationForm from '../components/RegisterationForm'
import RegisterationHeader from '../components/RegisterationHeader'

export default function Registration() {
  return (
   <main className="mainContainer">
        <RegisterationHeader/>
        <RegisterationForm/>
   </main>
  )
}
