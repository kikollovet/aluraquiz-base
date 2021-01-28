import styled from 'styled-components';

const AlternativesForm = styled.form`
  label {
    &[data-selected="true"] {
      background-color: #203E72;/*${({ theme }) => theme.colors.primary};*/
      
      &[data-status="SUCCESS"] {
        background-color: ${({ theme }) => theme.colors.success};
      }
      &[data-status="ERROR"] {
        background-color: #FF0000;/*${({ theme }) => theme.colors.wrong};*/
      }
    }
    &:focus {
      opacity: 1;
    } 
  }
  button {
    margin-top: 24px;
  }
`;

export default AlternativesForm;