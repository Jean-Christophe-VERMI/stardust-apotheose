import styled from 'styled-components';

const TeamPhotosStyled = styled.div`
  width: 50vh;

  h1 {
    font-size: ${(props) => props.theme.fontSizes.largest};
    margin: 0 auto;
    text-align: center;
    margin-bottom: ${(props) => props.theme.sizings.medium};
  }

  .team-photos {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: ${(props) => props.theme.sizings.medium};
  }

  .team-photos--photo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 150px;
    height: 150px;
    border: 1px solid ${(props) => props.theme.colors.white};
    margin: ${(props) => props.theme.sizings.medium};
  }

  p {
    text-align: center;
  }
`;

export default TeamPhotosStyled;
