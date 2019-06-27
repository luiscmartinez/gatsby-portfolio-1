import styled from 'styled-components'

export const StyledGitHub = styled.div`
  max-width: 1200px;
  padding-bottom: 100px;
  margin: auto;
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
    h2 {
      font-size: 3rem;
    }
    p {
      font-size: 1.8rem;
    }
  }
`
