import React from 'react'
import { StyledTestimonials } from './StyledTestimonials'
import Testimonial from './Testimonial'

export default function Testimonials() {
  return (
    <StyledTestimonials>
      <Testimonial
        title="Build personal website"
        body="Great experience overall working with Riley. Very professional and quality of work exceeded my expectation. Will surely use again."
      />
    </StyledTestimonials>
  )
}
