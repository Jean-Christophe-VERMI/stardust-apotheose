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
      font-size: 4rem;
    }

    .search-bar {
      width: 40%;
      padding: 0.3rem;
      font-size: 1em;
      border: none;
      border-radius: 0.3em;
      height: 2rem;
    }
  }

  .sky-map {
    padding: 2rem;
    max-width: 80%;
    max-height: 80%;
  }
`;

export default SkyMapStyled;
