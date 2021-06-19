import React, { useEffect, useRef } from 'react'
import { StyledModal } from './StyledModal'
import { CSSTransition } from 'react-transition-group'

export default function Modal({
  data,
  setIndex,
  show,
  toggleModal,
  index,
  dataLength,
}) {
  const { title, body, siteLink, codeLink, img } = data

  const prevFocusedElement = useRef(null)

  const hideOverflow = () => {
    document.querySelector('body').style.overflowY = 'hidden'
    document.querySelector('#modal-backdrop').style.overflowY = 'auto'
  }

  const showOverflow = () => {
    document.querySelector('body').style.overflowY = 'auto'
    document.querySelector('#modal-backdrop').style.overflowY = 'hidden'
  }

  useEffect(() => {
    if (show) {
      window.addEventListener('keydown', handleKeyboardNavigation)

      prevFocusedElement.current = document.activeElement
      document.getElementById('modal-backdrop').focus()
    } else {
      window.removeEventListener('keydown', handleKeyboardNavigation)
      prevFocusedElement.current?.focus()
    }
    return () => window.removeEventListener('keydown', handleKeyboardNavigation)
  }, [show, index])

  const handleKeyboardNavigation = e => {
    if (e.key === 'ArrowRight' || e.keyCode === 39) {
      next()
      return
    }

    if (e.key === 'ArrowLeft' || e.keyCode === 37) {
      previous()
      return
    }

    if (e.key === 'Escape' || e.keyCode === 27) {
      toggleModal()
      return
    }
  }

  const next = () => {
    if (index >= dataLength - 1) {
      setIndex(0)
    } else {
      setIndex(index => index + 1)
    }
  }

  const previous = () => {
    if (index === 0) {
      setIndex(dataLength - 1)
    } else {
      setIndex(index => index - 1)
    }
  }

  return (
    <CSSTransition
      timeout={300}
      classNames="modal"
      in={show}
      unmountOnExit
      onEntered={hideOverflow}
      onExiting={showOverflow}
    >
      <StyledModal
        onClick={e => (e.target.id === 'modal-backdrop' ? toggleModal() : null)}
        id="modal-backdrop"
        tabIndex={0}
      >
        <div className="container">
          <img onClick={toggleModal} src={img} alt={title} />
          <button
            className="close-modal-btn"
            arial-label="Close My Work modal"
            title="Close My Work modal"
            onClick={toggleModal}
          >
            &times;
          </button>
          <div className="modal content">
            <h4>{title}</h4>
            <p>{body}</p>
            <a href={siteLink} rel="noopener noreferrer" target="_blank">
              Visit Site
            </a>
            <a href={codeLink} rel="noopener noreferrer" target="_blank">
              View Code
            </a>
          </div>
        </div>
      </StyledModal>
    </CSSTransition>
  )
}
