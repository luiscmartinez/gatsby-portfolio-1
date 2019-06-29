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
  const [data] = useState([
    {
      img: learnLocker,
      title: 'Learn Locker',
      body:
        'LearnLocker is a full-stack social network learning application, built with 4 other web developers. Built using React, Node.js and PostgreSQL.',
      siteLink: 'https://learnedadev.netlify.com/',
      codeLink: 'https://github.com/learneda',
    },
    {
      img: caseStudy,
      title: 'Learn Locker',
      body:
        'LearnLocker is a full-stack social network learning application, built with 4 other web developers. Built using React, Node.js and PostgreSQL.',
      siteLink: 'https://learnedadev.netlify.com/',
      codeLink: 'https://github.com/learneda',
    },
    {
      img: instaClone,
      title: 'Learn Locker',
      body:
        'LearnLocker is a full-stack social network learning application, built with 4 other web developers. Built using React, Node.js and PostgreSQL.',
      siteLink: 'https://learnedadev.netlify.com/',
      codeLink: 'https://github.com/learneda',
    },
    {
      img: danielLanding,
      title: 'Learn Locker',
      body:
        'LearnLocker is a full-stack social network learning application, built with 4 other web developers. Built using React, Node.js and PostgreSQL.',
      siteLink: 'https://learnedadev.netlify.com/',
      codeLink: 'https://github.com/learneda',
    },
    {
      img: wbFlashback,
      title: 'Learn Locker',
      body:
        'LearnLocker is a full-stack social network learning application, built with 4 other web developers. Built using React, Node.js and PostgreSQL.',
      siteLink: 'https://learnedadev.netlify.com/',
      codeLink: 'https://github.com/learneda',
    },
    {
      img: bayshells,
      title: 'Learn Locker',
      body:
        'LearnLocker is a full-stack social network learning application, built with 4 other web developers. Built using React, Node.js and PostgreSQL.',
      siteLink: 'https://learnedadev.netlify.com/',
      codeLink: 'https://github.com/learneda',
    },
  ])

  const [show, setShow] = useState(false)
  const [index, setIndex] = useState(0)

  const activeModalImg = index => {
    setIndex(index)
    toggleModal()
  }

  const toggleModal = () => {
    setShow(!show)
  }

  return (
    <StyledMyWork>
      <div className="cards">
        {data.map((item, index) => (
          <Card
            img={item.img}
            index={index}
            alt="My Work"
            key={item.img}
            activeModalImg={activeModalImg}
            toggleModal={toggleModal}
          />
        ))}
      </div>
      <Modal data={data[index]} toggleModal={toggleModal} show={show} />
    </StyledMyWork>
  )
}
