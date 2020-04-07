import styled from 'styled-components';

const ThreadsWithCommentsStyled = styled.div`
  background-color: ${(props) => props.theme.colors.darkBlue};
  border-radius: 3px;
  display: flex;
  min-height: 80vh;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  margin: auto auto;
  padding: 30px;

  @media screen and (max-width : 650px) {
    width: 100%;
  }

  .content-section {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    margin-bottom: 2rem;

    @media screen and (max-width : 650px) {
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-around;
      align-items: center;
      margin-bottom: .3rem;
      margin-top: 1rem;
    }

  }

  .comments-section {
    background-color: #a4b0be;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    border-radius: 3px;
  }

  .content {
    background-color: #a4b0be;
    width: 100%;
    border-radius: 3px;
    margin-right: 5rem;
    padding: 2rem;

    h2 {
      color: white;
      size: 2rem;
      font-weight: bold;
    }

    @media screen and (max-width : 650px) {
      margin-right: 0rem;
      padding: 1rem;
      margin: 1rem;

    }

  }

  .go-back-button {
    text-align: right;

    button {
      background-color: #81b2c9;
      border-radius: 3px;
      border: 1px solid #ccc;
      padding: 0.5rem;
      color: white;

      &:hover {
        color: #222f3e;
        border: 1px solid #222f3e;
      }
    }
  }

  .content-post {
    background-color: white;
    color: black;
    border-radius: 3px;
    border: 1px solid #bdc3c7;
    text-align: left;
    margin-bottom: 0.5rem;
    padding: 0.3rem 0.5rem;
  }

  .action-post {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    text-align: right;
  }

  .info-author {
    color: black;
    font-style: italic;
    margin-right: 1rem;
  }

  .delete-post {
    background-color: #81b2c9;
    border-radius: 3px;
    border: 1px solid #ccc;
    color: white;

    &:hover {
      color: #222f3e;
    }
  }

  .form-comments {
    border-radius: 3px;
    text-align: center;
  }
`;

export default ThreadsWithCommentsStyled;
