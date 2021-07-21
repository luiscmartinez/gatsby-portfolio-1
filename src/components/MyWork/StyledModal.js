import styled from 'styled-components'

export const StyledModal = styled.div`
  background: rgba(0, 0, 0, 0.92);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 200;
  .container {
    max-width: 1200px;
    position: relative;
    margin: 5% auto;
    margin-bottom: 0;
    margin-top: 2%;
    position: relative;
    overflow: hidden;
    height: 100em;
    /* padding-top: 55%; */
    /* @media (max-width: 600px) {
      margin: 15% auto;
    }
    @media (max-width: 600px) {
      width: 95%;
    } */
    .close-modal-btn {
      position: absolute;
      border: none;
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
    .wrapped-frame {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      border: 4px solid white;

    }
  }
  .content {
      text-align: center;
      color: #fff;
      max-width: 700px;
      width: 90%;
      margin: 15px auto;
      margin-top: 0;
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
`
