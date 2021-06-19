import React, { useState } from 'react'

import { StyledMyWork } from './StyledMyWork'
import Card from './Card'
import Modal from './Modal'

import bayshells from 'images/bayshells-landing.jpg'
import dogeFlip from 'images/doge-flip.jpg'
import rawberri from 'images/rawberri-items.jpg'
import learnLocker from 'images/learn-locker.jpg'
import caseStudy from 'images/upwork-10-case-study.jpg'
import wbFlashback from 'images/wb-flashback.jpg'

const data = [
  {
    img: rawberri,
    title: 'Rawberri Order Builder',
    body:
      'Freelance work developing online ordering platform for restaurant. Built using Gatsby.js, MongoDB and Netlify serverless functions',
    siteLink: 'https://loving-kilby-fc3f0a.netlify.com/',
    codeLink: 'https://github.com/Riley-Brown/gatsby-online-food-orders',
  },
  {
    img: dogeFlip,
    title: 'Dogecoin Coin Flip',
    body:
      'Dogecoin peer-to-peer coin flip game. Real-time UI events for all connected users. Real-time deposits and withdraws using doge blockchain websocket. Built using React, TypeScript, Express, and MongoDB',
    codeLink: 'https://github.com/Riley-Brown/doge-flip',
    siteLink: 'https://doge-flip.riley.gg/',
  },
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
    siteLink: 'https://darren.riley.gg/case-study',
    codeLink: 'https://github.com/Riley-Brown/upwork-10',
  },
  {
    img: wbFlashback,
    title: 'WB Flashback',
    body:
      'Website built to showcase the changes in Brooklyn, New York, over many years. Includes amazing cross-fade, and split image before and after effects. Built using CSS, and JavaScript.',
    siteLink: 'https://wb-flashback.riley.gg/',
    codeLink: 'https://github.com/Riley-Brown/upwork-3',
  },
  {
    img: bayshells,
    title: 'Bay Shells Landing Page',
    body:
      'Beautiful modern design provided by the client, includes dynamic clickable tabs, and slick carousel. Built using vanilla CSS and jQuery.',
    siteLink: 'https://bayshells.riley.gg/',
    codeLink: 'https://github.com/Riley-Brown/bayshells-landing',
  },
]

export default function MyWork() {
  const [show, setShow] = useState(false)
  const [index, setIndex] = useState(0)

  const activeModalImg = index => {
    setIndex(index)
    toggleModal()
  }

  const toggleModal = () => setShow(!show)

  return (
    <StyledMyWork>
      <div className="cards">
        {data.map((item, index) => (
          <Card
            activeModalImg={activeModalImg}
            key={item.img}
            img={item.img}
            index={index}
            title={item.title}
          />
        ))}
      </div>
      <Modal
        data={data[index]}
        setIndex={setIndex}
        toggleModal={toggleModal}
        show={show}
        index={index}
        dataLength={data.length}
      />
    </StyledMyWork>
  )
}
