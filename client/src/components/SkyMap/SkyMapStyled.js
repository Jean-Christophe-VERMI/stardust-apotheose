import styled from 'styled-components';

const SkyMapStyled = styled.section`
  height: 100%;
  display: flex;
  padding-top: 5rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  background-color: #dfe6e9;

  .map {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .info-map {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: ${props => props.theme.fontSizes.larger};
    }

    .search-bar {
      padding: ${props => props.theme.sizings.small};
      font-size: ${props => props.theme.fontSizes.default};
      border: none;
      border-radius: ${props => props.theme.radius.medium};
      margin: ${props => props.theme.sizings.medium};
    }
  }

  .sky-map {
    padding: ${props => props.theme.sizings.large};
    max-width: 80%;
    max-height: 80%;
  }
`;

export default SkyMapStyled;
