import React, { Component } from 'react'
import bayshells from '../../images/bayshells-landing.png'
import caseStudy from '../../images/upwork-10-case-study.png'
import learnLocker from '../../images/learn-locker.png'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { StyledCarousel } from './StyledCarousel'

export default class Carousel extends Component {
  state = {
    images: [bayshells, caseStudy, learnLocker],
    index: 0,
  }
  componentDidMount() {
    setInterval(this.cycleCarousel, 2000)
  }

  cycleCarousel = () => {
    const { images, index } = this.state

    // increase index state if less than images length
    if (index >= images.length - 1) {
      this.setState({
        index: 0,
      })
    } else {
      this.setState({
        index: this.state.index + 1,
      })
    }
  }
  render() {
    const { images, index } = this.state

    return (
      <>
        <StyledCarousel>
          <TransitionGroup>
            <CSSTransition
              timeout={1000}
              classNames="fade"
              key={index}
              appear={true}
            >
              <img
                src={images[index]}
                alt=""
                style={{ height: '330px' }}
                className="carousel-img"
              />
            </CSSTransition>
          </TransitionGroup>
        </StyledCarousel>
      </>
    )
  }
}
