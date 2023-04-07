import React from 'react'
import { useState } from 'react'
import Modal from './Modal'
function RightHero() {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className="right_hero_section">
      <h1 className="huddle_title">Build The Community Your Fans Will Love</h1>

      <p className="text_desc">
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </p>

      {/* button */}
      <button
        className="register_btn"
        onClick={() => {
          setOpenModal(true)
        }}
      >
        Register
      </button>

      {/* modal render */}
      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  )
}

export default RightHero
