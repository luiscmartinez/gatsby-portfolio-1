import React, { useState } from 'react'
import bayshells from '../../images/bayshells-landing.png'
import danielLanding from '../../images/daniel-landing-page.jpg'
import instaClone from '../../images/insta-clone.png'
import learnLocker from '../../images/learn-locker.png'
import caseStudy from '../../images/upwork-10-case-study.png'
import wbFlashback from '../../images/wb-flashback.jpg'
import { StyledMyWork } from './StyledMyWork'
import Card from './Card'
import Modal from './Modal'
import { CSSTransition } from 'react-transition-group'

export default function MyWork() {
  const [imgs] = useState([
    learnLocker,
    caseStudy,
    instaClone,
    danielLanding,
    wbFlashback,
    bayshells,
  ])

  const [modalImg, setModalImg] = useState('')
  const [show, setShow] = useState(false)

  const activeModalImg = img => {
    setModalImg(img)
    toggleModal()
  }

  const toggleModal = () => {
    setShow(!show)
  }

  return (
    <StyledMyWork>
      <div className="cards">
        {imgs.map(img => (
          <Card
            img={img}
            alt="My Work"
            key={img}
            activeModalImg={activeModalImg}
            toggleModal={toggleModal}
          />
        ))}
      </div>
      {show ? (
        <Modal img={modalImg} toggleModal={toggleModal} show={show} />
      ) : null}
    </StyledMyWork>
  )
}
