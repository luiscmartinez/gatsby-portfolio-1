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
    justify-content: space-between;
    width: 90%;
    max-width: 1400px;
    margin: 40px auto;
    .card {
      flex: 0 0 30%;
      display: flex;
      margin-bottom: 60px;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      border-radius: 10px;
      background: #fff;
      padding: 15px 20px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 1px 6px rgba(0, 0, 0, 0.23);
      h1 {
        text-align: center;
        font-size: 2.3rem;
        font-weight: 500;
        margin-bottom: 10px;
      }
      img {
        width: 150px;
        height: 150px;
      }
    }
  }
`
