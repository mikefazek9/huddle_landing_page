import React from 'react'
import Form from './Form'

function Modal({ closeModal }) {
  return (
    <div className="modal_background">
      <div className="modal_container">
        <div className="close_modal">
          <span
            className="close_btn"
            onClick={() => {
              closeModal(false)
            }}
          >
            X
          </span>
        </div>
        {/*form input */}

        <Form />

        <div className="btn_section">
          <button
            className="cancel_btn"
            onClick={() => {
              closeModal(false)
            }}
          >
            Cancel
          </button>
          <button className="submit_btn">Register</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
