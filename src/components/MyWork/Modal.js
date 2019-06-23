import React from 'react'
import { StyledModal } from './StyledModal'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export default function Modal({ img, show, toggleModal }) {
  return (
    <TransitionGroup>
      <CSSTransition timeout={500} classNames="modal" key={img} appear={true}>
        <StyledModal>
          <div className="container">
            <img src={img} alt="" />
            <span onClick={toggleModal}>&times;</span>
          </div>
        </StyledModal>
      </CSSTransition>
    </TransitionGroup>
  )
}
