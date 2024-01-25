import styled from 'styled-components';

export const SearchbarHeader = styled.header`
  background-color: #0c4a6e;
  padding: 1.5rem;
  text-align: center;
`;

export const SearchbarForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchbarSubmitButton = styled.button`
  background-color: #0284c7;
  color: #fff;

  border: none;
  border-radius: 10px;
  padding: 1rem 1.5rem;

  cursor: pointer;
  box-shadow: 0 2px 4px rgba(52, 152, 219, 0.2);
  transition: background-color 0.3s, transform 0.1s ease-out;

  &:hover {
    background-color: #60a5fa;
    transform: scale(1.05);
  }

  &:active {
    background-color: #1f618d;
    transform: scale(0.95);
  }
`;

export const SearchbarSubmitButtonText = styled.span`
  margin-left: 8px;
  font-size: 1rem;
`;

export const SearchbarInput = styled.input`
  padding: 1rem 1.5rem;
  margin: 0 8px;
  border: 1px solid #ccc;
  border-radius: 4px;

  min-width: 350px;
  font-size: 1rem;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 1);
  transition: outline 0.1s;
  &:focus {
    box-shadow: 0 4px 8px rgba(2, 0, 0.5, 2);
    outline: 3.5px solid #60a5fa;
  }
`;
