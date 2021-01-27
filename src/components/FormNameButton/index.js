import styled from 'styled-components';

const FormNameButton = styled.button`
  background-color: #EE982F; /* Green */
  border: 2px solid #6A0303;
  border-radius: 15px;
  color: white;
  margin-top: 15px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  /*display: inline-block;*/
  word-break: break-word;
  font-size: 16px;
  :disabled {
    background-color: #F1A74E;
  }
  
`

export default FormNameButton;