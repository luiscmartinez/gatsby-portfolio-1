import React, { useState } from 'react'
import { StyledAbout } from './StyledAbout'
import Fade from 'react-reveal/Fade'
import axios from 'axios'
import formSpinner from '../../svg/formSpinner.svg'

export default function About() {
  const [inputs, setInputs] = useState({})
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(null)

  // form encode for netlify
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  // post form to netlify
  const onSubmit = e => {
    e.preventDefault()
    setSaving(true)

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
    axios
      .post('/', encode({ 'form-name': 'contact', ...inputs }), config)
      .then(() => setSaved(true))
      .catch(err => {
        console.log(err)
        setSaving(false)
      })
  }

  const onChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  return (
    <StyledAbout>
      <div className="container">
        <Fade>
          <div className="about" id="about">
            <h2>About Me</h2>
            <p>
              I am a 23 year old developer with a focus on web technology. I
              discovered web development in early 2018 and have been fascinated
              with it ever since.
            </p>
            <p>
              I started with HTML on CodeCademy, then CSS and JavaScript. I
              moved on to Team TreeHouse's 80 hour front-end development course,
              as well as many YouTube and Udemy courses. I couldn't get enough,
              I was hooked.
            </p>
            <p>
              I started Lambda School's 9 month coding school in late August
              2018, and learned valuable skills such as React, Node.js, SQL,
              Python and C. Most importantly, I learned how to learn.
            </p>
            <p>
              I am currently working as a front-end developer for an awesome
              startup in NYC and am loving every second of it.
            </p>
          </div>
        </Fade>
        <Fade>
          <div className="contact" id="contact">
            <h2>Contact Me</h2>
            <form onSubmit={onSubmit}>
              <input
                name="name"
                type="text"
                placeholder="Name"
                required
                onChange={onChange}
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                onChange={onChange}
              />
              <textarea
                required
                name="message"
                placeholder="Message"
                id=""
                cols="30"
                rows="10"
                onChange={onChange}
              />
              {saved ? (
                <span>Message sent! I'll get back to you soon.</span>
              ) : (
                <button type="submit" id="submit">
                  {saving ? 'Sending...' : 'Submit'}
                  {saving && <img src={formSpinner} alt="" />}
                </button>
              )}
            </form>
          </div>
        </Fade>
      </div>
    </StyledAbout>
  )
}
