import React from 'react'
import { StyledModal } from './StyledModal'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export default function Modal({ img, show, toggleModal }) {
  return (
    <CSSTransition timeout={300} classNames="modal" in={show} unmountOnExit>
      <StyledModal>
        <div className="container">
          <img src={img} alt="" />
          <span onClick={toggleModal}>&times;</span>
        </div>
      </StyledModal>
    </CSSTransition>
  )
}
