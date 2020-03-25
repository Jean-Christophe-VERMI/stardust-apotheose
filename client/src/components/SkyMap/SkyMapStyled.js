import styled from 'styled-components';

const SkyMapStyled = styled.section`

height: 100vh;
display : flex;
flex-direction : row;
align-items : center;
justify-content : space-between;
background-color: #c7ecee;


.map {
  min-width : 50%;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : space-between;
}

.info-map {
  display : flex;
  justify-content : space-between;
  align-items : center;

  h1 {
  font-size : 4rem;

  }

  .search-bar {
  width: 40%;
  padding: .3rem;
  font-size: 1em;
  border: none;
  border-radius: .3em;
  height: 2rem;
  
  }


}

.sky-map {
  padding: 2rem;
  max-width: 80%;
  max-height: 80%;
}

.infos-api {
  min-width : 30%;
  
}


`;

export default SkyMapStyled;
