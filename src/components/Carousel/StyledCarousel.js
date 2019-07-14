import styled from 'styled-components'

export const StyledCarousel = styled.div`
  .carousel-img {
    position: absolute;
    border: 2px solid #fff;
    height: 100%;
    max-height: 330px;
    will-change: contents;
    @media (max-width: 1230px) {
      /* max-height: initial; */
    }
  }
`
