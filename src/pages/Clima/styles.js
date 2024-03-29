import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 1020px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 60px;
  margin: 80px auto;

  h1 {
    font-size: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 10px;
    }
  }

  div {
    color: #191920;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin: 30px auto;
    border-radius: 4px;
  }
`;

export const Main = styled.div`
  border-radius: 4px;
  padding: 20px;

  margin: 20px auto;

  input {
    flex: 1;
    border: 1px solid #eee;
    background: #fff;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;

    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#fff')};
    }
  }
`;
