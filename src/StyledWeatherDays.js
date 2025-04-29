import styled from 'styled-components';

export const ContainerDays = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  padding: 1rem;

  @media (max-width: 1500px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const CardDay = styled.div`
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  text-align: center;
`;

export const Top = styled.div`
  margin-bottom: 1rem;

  h1 {
    font-size: 1.5rem;
    margin: 0.5rem 0;
  }
`;

export const Description = styled.div`
  p {
    font-size: 1rem;
    color: #555;
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  & > div {
    margin: 0.5rem;
  }

  p {
    margin: 0.2rem 0;
  }
`;