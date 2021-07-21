import React, { useState } from 'react'

import { StyledMyWork } from './StyledMyWork'
import Card from './Card'
import Modal from './Modal'

import bayshells from 'images/bayshells-landing.jpg'
import danielLanding from 'images/daniel-landing-page.jpg'
import rawberri from 'images/rawberri-items.png'
import learnLocker from 'images/learn-locker.png'
import caseStudy from 'images/upwork-10-case-study.jpg'
import wbFlashback from 'images/wb-flashback.jpg'
import pepesMexicanFoodImg from 'images/pepe-mexican-food.png'
import dataTonicImg from 'images/datatonic.png'

const data = [
  {
    img: learnLocker,
    title: 'Learn Locker',
    body:
      'LearnLocker is a full-stack social network learning application, built with 4 other web developers. Built using React, Node.js and PostgreSQL.',
    siteLink: 'https://learnedadev.netlify.com/',
    codeLink: 'https://github.com/learneda',
  },
  {
    img: pepesMexicanFoodImg,
    title: "Original Pepe's Mexican Food ",
    body:
      "Refactor client's multiple html page website into a single page application.",
    siteLink: 'https://original-pepes.luismartinez.dev',
    codeLink: 'https://github.com/luiscmartinez/originalpepes',
  },
  {
    img: dataTonicImg,
    title: 'Data Tonic',
    body: 'A Take-Home Project assignment for Prism Studios.',
    siteLink: 'https://datatonic.netlify.app/dashboard',
    codeLink: 'https://github.com/luiscmartinez/datatonic-fe',
  },
]

export default function MyWork() {
  const [show, setShow] = useState(false)
  const [clickedIndex, setIndex] = useState(0)

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
        data={data[clickedIndex]}
        setIndex={setIndex}
        toggleModal={toggleModal}
        show={show}
        clickedIndex={clickedIndex}
        dataLength={data.length}
      />
    </StyledMyWork>
  )
}
