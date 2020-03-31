import styled from 'styled-components';

const PostsStyled = styled.div`
  padding: ${props => props.theme.sizings.large};
  margin: auto;
  flex-direction: row;
  background-color: ${props => props.theme.colors.darkBlue};
  border-radius: ${props => props.theme.radius.medium};
  border: 1px solid ${props => props.theme.colors.white};
  height: 300px;
  width: 400px;
  opacity: 0.6;

  .posts-infos p {
    padding: ${props => props.theme.sizings.small};
    font-size: ${props => props.theme.sizings.default};
    background-color: ${props => props.theme.colors.white};
    border: none;
    border-radius: ${props => props.theme.radius.medium};
    margin: ${props => props.theme.sizings.medium};
    color: ${props => props.theme.colors.darkBlue};
  }
`;

export default PostsStyled;
