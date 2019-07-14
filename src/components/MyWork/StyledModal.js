import styled from 'styled-components'

export const StyledModal = styled.div`
  height: 100vh;
  background: rgba(0, 0, 0, 0.92);
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 200;
  overflow: auto;
  .container {
    max-width: 1200px;
    width: 90%;
    position: relative;
    margin: 5% auto;
    @media (max-width: 600px) {
      margin: 15% auto;
    }
    @media (max-width: 600px) {
      width: 95%;
    }
    .content {
      text-align: center;
      color: #fff;
      max-width: 700px;
      width: 90%;
      margin: 15px auto;

      h4 {
        font-size: 3rem;
      }
      p {
        font-size: 2rem;
        margin-bottom: 10px;
        opacity: 0.85;
        max-width: 650px;
        margin: auto;
        font-weight: 500;
      }
      a {
        font-size: 2.2rem;
        font-weight: 500;
        text-decoration: none;
        color: var(--primary);
        margin: 0px 15px;
      }
    }
    img {
      width: 95%;
      cursor: pointer;
      @media (max-width: 768px) {
        width: 100%;
      }
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
