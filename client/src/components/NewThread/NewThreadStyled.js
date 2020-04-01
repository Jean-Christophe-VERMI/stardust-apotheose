import styled from 'styled-components';

const NewThreadStyled = styled.div`


  background-color: #bdc3c7;
  border: 1px solid #dddddd;
  z-index: 6;

  .new-thread{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: .5rem;
  }

  .field-new-thread{
    width: 80%;
  }

`;

export default NewThreadStyled;
