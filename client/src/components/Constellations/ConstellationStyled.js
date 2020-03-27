import styled from 'styled-components';

const ConstellationStyled = styled.div`
  input {
    width: 200px;
    padding: 1rem;
    margin: 0.5rem;
    border: none;
    border-radius: 10px;
  }

  h2 {
    text-align: left;
    margin-bottom: 0.5rem;
  }

  .constellations-list {
    overflow-y: auto;
    max-height: 500px;
  }
`;

export default ConstellationStyled;
