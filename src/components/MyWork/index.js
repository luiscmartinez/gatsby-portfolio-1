import React, { useState } from 'react'
import bayshells from '../../images/bayshells-landing.jpg'
import danielLanding from '../../images/daniel-landing-page.jpg'
import instaClone from '../../images/insta-clone.jpg'
import learnLocker from '../../images/learn-locker.jpg'
import caseStudy from '../../images/upwork-10-case-study.jpg'
import wbFlashback from '../../images/wb-flashback.jpg'
import { StyledMyWork } from './StyledMyWork'
import Card from './Card'
import Modal from './Modal'

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
      title: 'UpWork Freelance Work',
      body:
        'Website for a client featuring custom hover animations, and custom image carousel using HTML 5 data attributes. Design provided by client.',
      siteLink: 'https://riley.gg/upwork-10/case-study.html',
      codeLink: 'https://github.com/Riley-Brown/upwork-10',
    },
    {
      img: instaClone,
      title: 'Insta Clone React App',
      body: 'Insta Clone React App',
      siteLink: 'https://riley.gg/lambda/insta-clone/',
      codeLink: 'https://github.com/Riley-Brown/React-Insta-Clone',
    },
    {
      img: danielLanding,
      title: 'Daniel D Website',
      body:
        'Personal website built for a client. The awesome design was provided by the client, I just put it all together. Built using Bootstrap.',
      codeLink: 'https://github.com/Riley-Brown/upwork-4',
      siteLink: 'https://riley.gg/upwork-4/',
    },
    {
      img: wbFlashback,
      title: 'WB Flashback',
      body:
        'Website built to showcase the changes in Brooklyn, New York, over many years. Includes amazing cross-fade, and split image before and after effects. Built using CSS, and JavaScript.',
      siteLink: 'https://riley.gg/upwork-3/',
      codeLink: 'https://github.com/Riley-Brown/upwork-3',
    },
    {
      img: bayshells,
      title: 'Bay Shells Landing Page',
      body:
        'Beautiful modern design provided by the client, includes dynamic clickable tabs, and slick carousel. Built using vanilla CSS and jQuery.',
      siteLink: 'https://riley.gg/upwork-7/',
      codeLink: 'https://github.com/Riley-Brown/bayshells-landing',
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
