import React from 'react'
import { StyledModal } from './StyledModal'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export default function Modal(props) {
  const { title, body, siteLink, repoLink, img } = props.data
  return (
    <CSSTransition
      timeout={300}
      classNames="modal"
      in={props.show}
      unmountOnExit
    >
      <StyledModal
        onClick={e =>
          e.target.id === 'modal-backdrop' ? props.toggleModal() : null
        }
        id="modal-backdrop"
      >
        <div className="container">
          <img src={img} alt="" />
          <span onClick={null}>&times;</span>
          <div className="modal content">
            <h4>{title}</h4>
            <p>{body}</p>
            <a href={siteLink}>Visit Site</a>
            <a href={repoLink}>View Code</a>
          </div>
        </div>
      </StyledModal>
    </CSSTransition>
  )
}
