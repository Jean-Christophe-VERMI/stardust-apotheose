import styled from 'styled-components';

const ThreadsStyled = styled.div`

  background-color: #bdc3c7;
  
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  justify-content: space-between;
  width: 70%;
  margin: auto auto;
  padding: 30px;

  .thread {
    padding : 2rem;
    width : 100%;
  }

  h1 {
    color: #60a3bc;
    font-weight: bold;
  }

`;

export default ThreadsStyled;
