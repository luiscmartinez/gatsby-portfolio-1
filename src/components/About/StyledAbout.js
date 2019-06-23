import styled from 'styled-components'

export const StyledAbout = styled.div`
  .container {
    padding: 100px 0;
    max-width: 1400px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .about {
      flex: 0 0 50%;
    }
    .contact {
      flex: 0 0 45%;
    }

    .contact {
      form {
        display: flex;
        flex-direction: column;
        input,
        textarea {
          padding: 10px;
          border: 1px solid lightgrey;
          border-radius: 5px;
          margin-bottom: 10px;
          resize: none;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        #submit {
          background: var(--primary);
          color: #fff;
          font-size: 1.6rem;
        }
      }
    }
  }
  h2 {
    font-size: 4rem;
    color: #222;
    text-align: center;
    margin-bottom: 10px;
  }
  p {
    font-size: 1.9rem;
    margin-bottom: 20px;
    line-height: 1.6;
  }
`
