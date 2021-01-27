import styled from 'styled-components'

const Widget = styled.div`
  /*text-align: center;*/
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid black;/*${({ theme }) => theme.colors.primary};*/
  background-color: black; /*${({ theme }) => {
    return theme.colors.mainBg;
  }};*/
  width: 100%;
  background-size: 100% 100%;
  background-position: center;
  background-image: url("/Fundo-Vermelho-Tons.jpg");

  border-radius: 4px;
  overflow: hidden;
  text-align: left;
  /*opacity: .5;*/

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  /*flex: 1;
  text-align: center;*/
  /*width: 100%;
  height: 100%;*/
  padding: 18px 32px;
  background-color: #270001;/*${({ theme }) => theme.colors.primary};*/
  background-size: 100% 100%;
  background-position: center;
  background-image: url("/Fundo-Vermelho-Tons-Header4.jpg");
  border-bottom: 1px solid black;
  
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
      margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;
  
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Widget;