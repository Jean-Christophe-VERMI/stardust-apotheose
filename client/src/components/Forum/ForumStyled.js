import styled from 'styled-components';

const ForumStyled = styled.section`

  min-height: 100vh;
  background-color: #16a085;
  display: flex;
  flex-direction : column;
  align-items: center;
  justify-content: center;

  .thread{
   background-color: #bdc3c7;
   border: 1px solid #dddddd;
  }

  .comment{
    border: 1px solid blue;
    background-color: #ecf0f1;
  }

`;

export default ForumStyled;