import React from 'react'
import { StyledAbout } from './StyledAbout'
export default function index() {
  return (
    <StyledAbout>
      <div className="container">
        <div className="about">
          <h2>About Me</h2>
          <p>
            I am a 23 year old developer with a focus on web technology, from
            Boston, Massachusetts. I discovered web development in early 2018
            and have been fascinated with it ever since.
          </p>
          <p>
            I started with HTML on CodeCademy, then CSS and JavaScript. I moved
            on to Team TreeHouse's 80 hour front-end development course, as well
            as many YouTube and Udemy courses. I couldn't get enough, I was
            hooked.
          </p>
          <p>
            I started Lambda School's 9 month coding school in late August 2018,
            and learned valuable skills such as React, Node.js, SQL, Python and
            C. Most importantly, I learned how to learn.
          </p>
          <p>
            I am currently working as a front-end developer for an awesome
            startup in NYC and am loving every second of it.
          </p>
        </div>
        <div className="contact">
          <h2>Contact Me</h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea name="" placeholder="Message" id="" cols="30" rows="10" />
            <input
              type="submit"
              value="Submit Form"
              id="submit"
              name="submit"
            />
          </form>
        </div>
      </div>
    </StyledAbout>
  )
}
