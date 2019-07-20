import React from 'react'
import { StyledModal } from './StyledModal'
import { CSSTransition } from 'react-transition-group'

export default function Modal(props) {
  const { title, body, siteLink, codeLink, img } = props.data

  const hideOverflow = () => {
    document.querySelector('body').style.overflowY = 'hidden'
    document.querySelector('#modal-backdrop').style.overflowY = 'auto'
  }

  const showOverflow = () => {
    document.querySelector('body').style.overflowY = 'auto'
    document.querySelector('#modal-backdrop').style.overflowY = 'hidden'
  }

  return (
    <CSSTransition
      timeout={300}
      classNames="modal"
      in={props.show}
      unmountOnExit
      onEntered={hideOverflow}
      onExiting={showOverflow}
    >
      <StyledModal
        onClick={e =>
          e.target.id === 'modal-backdrop' ? props.toggleModal() : null
        }
        id="modal-backdrop"
      >
        <div className="container">
          <img onClick={props.toggleModal} src={img} alt="" />
          <span onClick={props.toggleModal}>&times;</span>
          <div className="modal content">
            <h4>{title}</h4>
            <p>{body}</p>
            <a href={siteLink}>Visit Site</a>
            <a href={codeLink}>View Code</a>
          </div>
        </div>
      </StyledModal>
    </CSSTransition>
  )
}
