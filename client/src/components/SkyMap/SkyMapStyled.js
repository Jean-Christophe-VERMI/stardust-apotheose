import styled from 'styled-components';

const SkyMapStyled = styled.section`
  height: 100%;
  display: flex;
  padding-top: ${props => props.theme.sizings.largest};
  display: grid;
  grid-template-columns: 2fr 1fr;
  background-color: ${props => props.theme.colors.darkBlue};

  .map {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
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
      margin-left: ${props => props.theme.sizings.medium};
    }
  }

  .sky-map {
    padding: ${props => props.theme.sizings.large};
    max-width: 80%;
    max-height: 80%;
  }
`;

export default SkyMapStyled;
