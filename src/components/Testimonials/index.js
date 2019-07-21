import React, { Component } from 'react'
import { StyledTestimonials } from './StyledTestimonials'
import Testimonial from './Testimonial'
import rightAngle from '../../svg/right.svg'
import leftAngle from '../../svg/left.svg'

export default class Testimonials extends Component {
  state = {
    testimonials: [
      {
        title: 'Build personal website',
        body:
          'Great experience overall working with Riley. Very professional and quality of work exceeded my expectation. Will surely use again.',
      },
      {
        title:
          'Help dialing-in the JS/CSS/Responsiveness of a simple one-page website.',
        body:
          'Riley was easy to work with, had great communication skills, and excelled at thinking of creative solutions to coding problems that ensured the finished product was perfect.',
      },
      {
        title: 'One Page website in one Day',
        body:
          'Completed a rush one day development job fast and with a great overall design.',
      },
      {
        title: 'Customize a Bootstrap Template',
        body:
          'Riley is great to work with. Prompt and easy to communicate with.',
      },
    ],
    index: 0,
    height: '',
    paused: false,
    visible: false,
    length: null,
  }

  componentDidMount() {
    const interval = setInterval(this.cycle, 4000)
    this.setState({ interval, length: this.state.testimonials.length })

    if (this.state.paused || this.state.visible) {
      clearInterval(interval)
    } else {
      setInterval(interval, 4000)
    }

    let height = document.querySelector('.testimonial').clientHeight
    this.setState({ height })

    window.addEventListener('scroll', this.isVisible)
  }

  cycle = () => {
    const { index, testimonials, visible, paused } = this.state

    // check paused and visible state
    if (!paused && visible) {
      // increase index state if less than images length
      if (index >= testimonials.length - 1) {
        this.setState({
          index: 0,
        })
      } else {
        this.setState({
          index: this.state.index + 1,
        })
      }
    }

    let height = document.querySelector('.testimonial').clientHeight
    this.setState({ height })
  }

  isVisible = () => {
    if (!this.testimonial) return false

    const top = this.testimonial.getBoundingClientRect().top
    const visible = top >= 0 && top <= window.innerHeight

    if (!visible) {
      this.setState({ visible: false })
    } else if (visible) {
      this.setState({ visible: true })
    }
  }

  // update height state if click to next slide
  componentDidUpdate(prevProps, prevState) {
    let height = document.querySelector('.testimonial').clientHeight
    if (height != prevState.height) {
      this.setState({ height })
    }
  }

  render() {
    const { index, testimonials, height, length } = this.state

    let indexControls = []

    for (let i = 0; i < length; i++) {
      indexControls.push(
        <div>
          <button
            className="index-control"
            data-index={`${i}`}
            data-active={i === index ? 'true' : null}
          />
        </div>
      )
    }

    return (
      <StyledTestimonials
        style={{ height: `${height + 40}px`, transition: '200ms ease-in' }}
        onMouseEnter={() => this.setState({ paused: true })}
        onMouseLeave={() => this.setState({ paused: false })}
        ref={el => (this.testimonial = el)}
        id="my-work"
      >
        <Testimonial
          title={testimonials[index].title}
          body={testimonials[index].body}
          index={index}
        />
        {/* carousel controls */}
        <span
          className="carousel-left"
          onClick={() => {
            if (index === 0) {
              this.setState({ index: testimonials.length - 1 })
              let height = document.querySelector('.testimonial').clientHeight
              this.setState({ height })
            } else {
              this.setState({ index: index - 1 })
              let height = document.querySelector('.testimonial').clientHeight
              this.setState({ height })
            }
          }}
        >
          <img src={leftAngle} />
        </span>
        <span
          className="carousel-right"
          onClick={() => {
            if (index >= testimonials.length - 1) {
              this.setState({ index: 0 })
              let height = document.querySelector('.testimonial').clientHeight
              this.setState({ height })
            } else {
              this.setState({ index: index + 1 })
              let height = document.querySelector('.testimonial').clientHeight
              this.setState({ height })
            }
          }}
        >
          <img src={rightAngle} />
        </span>
        <div className="index-container">{indexControls}</div>
      </StyledTestimonials>
    )
  }
}
