import styled from 'styled-components';

const NewThreadStyled = styled.div`
  background-color: ${(props) => props.theme.colors.darkBlue};
  border: 1px solid #dddddd;
  border-radius: ${(props) => props.theme.radius.medium};
  z-index: 6;

  .new-thread {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    border: 1px solid #dddddd;
    border-radius: ${(props) => props.theme.radius.medium};
  }

  .field-new-thread {
    width: 80%;
    border: 1px solid #dddddd;
    border-radius: ${(props) => props.theme.radius.medium};
  }
`;

export default NewThreadStyled;
