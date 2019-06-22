import React from 'react'
import { StyledModal } from './StyledModal'

export default function Modal({ img, show, toggleModal }) {
  return (
    <StyledModal style={{ display: show ? 'block' : 'none' }}>
      <div className="container">
        <img src={img} alt="" />
        <span onClick={toggleModal}>&times;</span>
      </div>
    </StyledModal>
  )
}
