import styled from 'styled-components';

const ConstellationStyled = styled.div`
  input {
    padding: ${props => props.theme.sizings.small};
    font-size: ${props => props.theme.fontSizes.default};
    border: none;
    border-radius: ${props => props.theme.radius.medium};
    margin-right: ${props => props.theme.sizings.medium};
  }

  h2 {
    text-align: left;
    margin-bottom: ${props => props.theme.sizings.small};
  }

  .constellations-list {
    overflow-y: auto;
    max-height: 500px;
  }

  .constellation-link {
    cursor: pointer;

    &:hover {
      color: ${props => props.theme.colors.linkDark};
    }
  }
`;

export default ConstellationStyled;
