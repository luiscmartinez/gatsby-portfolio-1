import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'
import axios from 'axios'
import formSpinner from '../../../svg/formSpinner.svg'

export default function ContactForm() {
  const [inputs, setInputs] = useState({})
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(null)
  // form encode for netlify
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&')
  }

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }
  // post form to netlify
  const onSubmit = (e) => {
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
      .catch((err) => {
        console.log(err)
        setSaving(false)
      })
  }
  return (
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
  )
}
