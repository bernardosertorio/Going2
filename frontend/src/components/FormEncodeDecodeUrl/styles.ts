import styled from 'styled-components';
import { shade } from 'polished';

export const FormEncodeDecodeUrlStyles = styled.div`
  margin-top: -2rem;
  margin-left: 17px;
  max-width: 700px;
  align-items: center;

  form {
    max-width: 700px;
    display: flex;

    & + form {
      margin-top: 5rem;
    }

    button {
      width: 210px;
      height: 70px;
      background: #0000CD;
      border-radius: 0px 5px 5px 0px;
      border: 0;
      color: #fff;
      font-weight: bold;
      transition: background-color 0.2s;
      &:hover {
        background: ${shade(0.2, '#0000CD')};
      }
    }
  }
`;