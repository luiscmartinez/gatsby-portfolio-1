import styled from 'styled-components'

export const StyledSkills = styled.div`
  padding-top: 50px;
  @media (max-width: 600px) {
    padding-bottom: 2rem;
  }
  h2 {
    font-size: 5rem;
    text-align: center;
    color: var(--primary);
    @media (max-width: 500px) {
      font-size: 4rem;
    }
  }
  .styled-line {
    width: 100px;
    display: block;
    margin: 20px auto;
    border: 2px solid #222;
    @media (max-width: 768px) {
      margin-bottom: 40px;
    }
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 90%;
    max-width: 1200px;
    margin: 40px auto;
    @media (max-width: 900px) {
      :last-of-type {
        margin: 0 auto;
      }
    }
    .card {
      flex: 0 0 30%;
      display: flex;
      margin-bottom: 60px;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      border-radius: 10px;
      background: #fff;
      padding: 20px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 1px 6px rgba(0, 0, 0, 0.23);
      @media (max-width: 768px) {
        flex: 0 0 45%;
      }
      @media (max-width: 500px) {
        flex: 0 0 100%;
      }
      h1 {
        text-align: center;
        font-size: 2.3rem;
        font-weight: 500;
        margin-bottom: 10px;
      }
      img {
        width: 140px;
        height: 140px;
      }
    }
  }
`
