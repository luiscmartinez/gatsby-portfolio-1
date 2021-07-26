import React, { useEffect, useState } from 'react'
import { StyledModal } from './StyledModal'
import { CSSTransition } from 'react-transition-group'

export default function Modal({
  data,
  setIndex,
  show,
  toggleModal,
  clickedIndex,
  dataLength,
}) {
  const { title, body, siteLink, codeLink } = data

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
      window.addEventListener('keydown', arrowKeysNavigation)
    } else {
      window.removeEventListener('keydown', arrowKeysNavigation)
    }
    return () => window.removeEventListener('keydown', arrowKeysNavigation)
  }, [show, clickedIndex])

  const arrowKeysNavigation = e => {
    if (e.key === 'ArrowRight' || e.keyCode === 39) {
      next()
    } else if (e.key === 'ArrowLeft' || e.keyCode === 37) {
      previous()
    }
  }

  const next = () => {
    if (clickedIndex >= dataLength - 1) {
      setIndex(0)
    } else {
      setIndex(clickedIndex => clickedIndex + 1)
    }
  }

  const previous = () => {
    if (clickedIndex === 0) {
      setIndex(dataLength - 1)
    } else {
      setIndex(clickedIndex => clickedIndex - 1)
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
      >
        <div className="container">
          <iframe
            title={title}
            className="wrapped-frame"
            src={siteLink}
            loading="lazy"
          ></iframe>
          <button
            className="close-modal-btn"
            arial-label="Close My Work modal"
            onClick={toggleModal}
          >
            &times;
          </button>
        </div>
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
      </StyledModal>
    </CSSTransition>
  )
}
