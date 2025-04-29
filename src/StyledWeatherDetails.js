import styled from 'styled-components';

export const LocationTitle = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-top: 2rem;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  background-color: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 800px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Top = styled.div`
  flex: 1;
  min-width: 250px;
  text-align: center;

  & > div {
    margin-bottom: 1rem;
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  min-width: 250px;

  & > div {
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;

    & > div {
      margin: 1rem;
    }
  }
`;