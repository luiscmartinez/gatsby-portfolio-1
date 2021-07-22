import React, { useState } from 'react'

import { StyledMyWork } from './StyledMyWork'
import Card from './Card'
import Modal from './Modal'

import { graphql, useStaticQuery } from 'gatsby'



export default function MyWork() {
  const [show, setShow] = useState(false)
  const [clickedIndex, setIndex] = useState(0)

  const myWorkQuey = useStaticQuery(graphql`
  query MyWorkQuey {
    allJson {
      edges {
        node {
          id
          body
          title
          siteLink
          img
        }
      }
    }
  }
  `)

  const toggleModal = () => setShow(!show)

  const activeModalImg = index => {
    setIndex(index)
    toggleModal()
  }

  const myWorkList = myWorkQuey.allJson.edges.map(edge => edge.node)
  
  return (
    <StyledMyWork>
      <div className="cards">
        {myWorkList.map((item, index) => (
          <Card
            activeModalImg={activeModalImg}
            key={item.id}
            index={index}
            title={item.title}
          />
        ))}
      </div>
      <Modal
        data={myWorkList[clickedIndex]}
        setIndex={setIndex}
        toggleModal={toggleModal}
        show={show}
        clickedIndex={clickedIndex}
        dataLength={myWorkList.length}
      />
    </StyledMyWork>
  )
}

