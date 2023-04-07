import React from 'react'
import { useState } from 'react'
function Form() {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  return (
    <div className="form_section">
      <h2 className="signUp_title">Sign Up</h2>
      <form className="form">
        <input
          type="text"
          name="firstName"
          className="first_name_input"
          placeholder="first name..."
        />
        <input
          type="text"
          name="last name"
          className="last_name_input"
          placeholder="last name..."
        />
        <input
          type="email"
          name="email"
          id="email"
          className="email_input"
          placeholder="email..."
        />
      </form>
    </div>
  )
}

export default Form
