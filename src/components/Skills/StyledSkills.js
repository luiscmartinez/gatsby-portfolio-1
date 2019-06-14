import styled from 'styled-components'

export const StyledSkills = styled.div`
  padding: 50px 0;
  h2 {
    font-size: 5rem;
    text-align: center;
    color: var(--primary);
  }
  .styled-line {
    width: 100px;
    display: block;
    margin: 20px auto;
    border: 2px solid #222;
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 90%;
    max-width: 1400px;
    margin: auto;
    .card {
      flex: 0 0 30%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      h1 {
        text-align: center;
      }
      img {
        width: 150px;
        height: 150px;
      }
    }
  }
`
