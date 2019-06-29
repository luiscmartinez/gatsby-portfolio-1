import React, { useEffect } from 'react'
import { StyledModal } from './StyledModal'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export default function Modal(props) {
  const { title, body, siteLink, codeLink, img } = props.data

  useEffect(() => {
    if (props.show) {
      document.querySelector('html').style.overflowY = 'hidden'
    } else {
      document.querySelector('html').style.overflowY = 'auto'
    }
  }, [props.show])

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
