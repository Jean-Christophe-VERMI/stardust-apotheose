import styled from 'styled-components';

const TeamPageStyled = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${props => props.theme.colors.darkBlue};

  .team-photos {
    display: flex;
    margin: ${props => props.theme.sizings.medium};
  }

  input,
  text-area {
    width: 100%;

    &:hover {
      border: 1px solid ${props => props.theme.colors.linkDark};
    }
  }

  input,
  .message-text {
    display: block;
    padding: ${props => props.theme.sizings.small};
    font-size: ${props => props.theme.fontSizes.default};
    border: 1px solid ${props => props.theme.colors.darkBlue};
    border-radius: ${props => props.theme.radius.medium};
    margin: ${props => props.theme.sizings.medium} 0;
  }

  p {
    padding: ${props => props.theme.sizings.small};
    font-size: ${props => props.theme.fontSizes.small};
  }
`;

export default TeamPageStyled;
