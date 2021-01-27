import styled from 'styled-components';

const InputName = styled.input`
  font-family: 'Roboto', sans-serif;
  color: white;
  font-size: 1.0rem;
  margin: 0 auto;
  padding: 0.8rem 1.2rem;
  /*border-radius: 0.2rem;*/
  background-color: black;
  /*border: none;*/
  border: 2px solid #6A0303;
  border-radius: 15px;
  width: 80%;
  display: block;
  /*border-bottom: 0.3rem solid transparent;
  transition: all 0.3s;*/
  :focus {
    border: 2px solid white;
    border-radius: 15px;
    outline: none;
  }
  
  
`

export default InputName;