import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #f4f4f4;
    color: #333;
  }
`;

export const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #e0f7fa;
  padding: 1rem;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  gap: 0.5rem;
  flex-wrap: nowrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

export const SearchInput = styled.input`
  flex: 1 1 auto;
  padding: 1rem;
  font-size: 1.2rem;
  border: 2px solid #00acc1;
  border-radius: 8px;
  min-width: 0;
  width: 100%;
`;

export const SearchButton = styled.button`
  flex: 0 0 auto;
  background-color: #00acc1;
  color: white;
  font-size: 1.5rem;
  padding: 0.8rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;

  &:hover {
    background-color: #007c91;
  }

  @media (min-width: 768px) {
    width: auto;
  }
`;