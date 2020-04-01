import styled from 'styled-components';

export const TermesStyled = styled.div`



  background-color: ${props => props.theme.colors.darkBlue};
  text-align:left;
  font-family: Georgia, serif;
  padding-left:1rem;
  width:auto;
  


h1 {
      color: white;
      text-align: center;
      padding-top:12rem;
      text-transform:uppercase;
      font-size: 1.5rem;
      padding-bottom:3rem;
    }


    p{
      color: white;
      
    }


h2 {  
      color: white;
      font-size:1rem;
      padding:2rem;
      text-align:center;
}
button{
  color:green;
  position: fixed; 
  text-transform:uppercase;
  font-weight:bold;
}

`;


export default TermesStyled;
