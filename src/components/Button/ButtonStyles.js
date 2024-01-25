import styled from 'styled-components';

export const LoadMoreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 40px;
  margin: auto;
  margin-top: 20px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #2980b9;
    transform: scale(1.1);
  }

  &:active {
    background-color: #2c3e50;
    transform: scale(0.9);
  }
`;
