import styled from 'styled-components'

export const StyledTestimonials = styled.div`
  padding-bottom: 50px;
  max-width: 700px;
  margin: auto;
  text-align: center;
  width: 90%;
  .testimonial {
    h2 {
      font-size: 3rem;
      font-weight: normal;
    }
    .quote {
      font-size: 5rem;
      color: #333;
      position: absolute;
      top: -5px;
      left: 10px;
      margin-right: 5px;
      display: inline-block;
      height: 0;
    }
    p {
      font-size: 2.1rem;
      padding: 10px 20px;
      line-height: 1.4;
      position: relative;
      opacity: 0.75;
    }
    .star {
      color: var(--primary);
      font-size: 3rem;
    }
  }
`
