import styled from 'styled-components';

const ThreadsStyled = styled.div`
  background-color: ${(props) => props.theme.colors.darkBlue};
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  justify-content: space-between;
  width: 50%;
  margin: auto auto;
  padding: 30px;

  .thread {
    padding: 2rem;
    width: 100%;
  }

  h1 {
    color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.fontSizes.larger};
    font-weight: bold;
    text-align: center;
    margin: ${(props) => props.theme.sizings.large};
  }
`;

export default ThreadsStyled;
