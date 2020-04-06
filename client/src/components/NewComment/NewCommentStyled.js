import styled from 'styled-components';

const NewThreadStyled = styled.div`
  background-color: #bdc3c7;
  border-radius: 3px;
  border: 1px solid ${(props) => props.theme.colors.danger};
  z-index: 6;

  .link-register {
    color: #81b2c9;
  }

  .not-logged-comment {
    padding: 0.8rem;
    background-color: #222f3e;
    border-radius: 3px;
  }
`;

export default NewThreadStyled;
