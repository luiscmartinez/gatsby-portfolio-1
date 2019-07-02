import styled from 'styled-components'

export const StyledGitHub = styled.div`
  max-width: 1200px;
  padding-bottom: 100px;
  margin: auto;
  width: 90%;
  .title {
    text-align: center;
    font-size: 4rem;
    color: var(--primary);
  }
  hr {
    width: 90px;
    margin: 20px auto 60px;
    border: 2px solid #222;
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .card {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 1px 6px rgba(0, 0, 0, 0.23);
    padding: 15px;
    text-align: center;
    flex: 0 0 45%;
    margin-bottom: 50px;
    @media (max-width: 850px) {
      flex: 0 0 100%;
    }
    h2 {
      font-size: 3rem;
      color: var(--primary);
    }
    p {
      font-size: 1.8rem;
      max-width: 300px;
      margin: auto;
      margin-bottom: 20px;
    }
    button {
      display: block;
      border: none;
      outline: none;
      background: none;
      text-align: center;
      width: 80%;
      color: #fff;
      padding: 6px;
      font-size: 1.4rem;
      border-radius: 5px;
      margin: auto auto 7px;
      max-width: 350px;
    }
  }
`
