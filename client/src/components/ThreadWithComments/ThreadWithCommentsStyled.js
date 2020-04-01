import styled from 'styled-components';

const ThreadsWithCommentsStyled = styled.div`

  background-color: #bdc3c7;
  border: 1px solid #dddddd;
  border-radius: 3px;
  display: flex;
  min-height: 80vh;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  margin: auto auto;
  padding: 30px;

  .content-section{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    
  }

  .comments-section {
    background-color: #222f3e;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    border-radius: 3px;
  }

  .content {
    background-color: #222f3e;
    padding : 2rem;
    width : 100%;
    border-radius: 3px;
    margin-right: 5rem;

    h2{
      color: #81b2c9;
      size: 2rem;
      font-weight: bold;
    }
  }

  .go-back-button {
    text-align: right;

    button {
      background-color: #81b2c9;
      border-radius: 3px;
      border: 1px solid #ccc;
      padding: .5rem;
      color: white;

      &:hover{
        background-color: #222f3e;
      }
    }
    
  }

  .comments {
    border-radius: 3px;
    text-align: center;
    margin-bottom: 2rem;
  }

  .form-comments {
    border-radius: 3px;
    text-align: center;
  }

`;

export default ThreadsWithCommentsStyled;
