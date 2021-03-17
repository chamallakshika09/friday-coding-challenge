import styled from 'styled-components';

export const Button = styled.button`
  min-width: 100px;
  width: 120px;
  height: 30px;
  letter-spacing: 0.5px;
  line-height: 30px;
  padding: 0 15px 0 15px;
  font-size: 14px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 10px;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
