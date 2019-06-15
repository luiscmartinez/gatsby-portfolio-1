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
    visible: true,
  }
  componentDidMount() {
    const interval = setInterval(this.cycleCarousel, 2000)

    this.setState({ interval: interval })

    if (!this.state.visible) {
      clearInterval(interval)
    } else {
      setInterval(interval, 2000)
    }

    window.addEventListener('scroll', this.isVisible)
  }

  cycleCarousel = () => {
    const { images, index, visible } = this.state

    // increase index state if less than images length
    if (visible) {
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
  }

  // pause carousel if not in viewport
  isVisible = () => {
    if (!this.carousel) return false
    // top of carousel element
    const top = this.carousel.getBoundingClientRect().top
    // boolean to check if element currently visible
    const visible = top >= 0 && top <= window.innerHeight

    if (!visible) {
      this.setState({ visible: false })
    } else if (!this.state.visible && visible) {
      this.setState({ visible: true })
    }
  }
  render() {
    const { images, index } = this.state

    return (
      <StyledCarousel ref={el => (this.carousel = el)}>
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
    )
  }
}
