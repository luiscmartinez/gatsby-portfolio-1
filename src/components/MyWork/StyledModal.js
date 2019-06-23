import styled from 'styled-components'

export const StyledModal = styled.div`
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 200;
  .container {
    max-width: 1200px;
    width: 90%;
    margin: auto;
    margin-top: 5%;
    position: relative;
    img {
      width: 95%;
    }
    span {
      position: absolute;
      top: 0;
      color: red;
      font-size: 6rem;
      right: 0px;
      height: 0;
      cursor: pointer;
      opacity: 0.8;
      transition: 200ms ease-out;
      &:hover {
        transition: 200ms ease-in;
        opacity: 1;
      }
    }
  }
`
