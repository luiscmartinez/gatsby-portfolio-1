import styled from 'styled-components'
import landing from '../../images/landing.jpg'

export const StyledLanding = styled.div`
  background-image: linear-gradient(
      rgba(34, 84, 112, 0.85),
      rgba(34, 84, 112, 0.85)
    ),
    url(${landing});
  height: 100vh;
  background-position: center;
  background-size: cover;
`
