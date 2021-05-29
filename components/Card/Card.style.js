import styled from "styled-components";

export const CardContainer = styled.a`
  width: 100%;
  display: grid;
  grid-template-columns: 0.75fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  grid-template-areas:
    "Info Image"
    "Info Image";
  padding: ${({ theme: { spacing } }) => `${spacing.xl} 96px`}; ;
`;

export const InfoContainer = styled.div`
  grid-area: Info;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    margin: 0;
    font-family: ${({ theme: { font } }) => font.heading};
    font-size: 38px;
    text-transform: capitalize;
    margin-bottom: ${({ theme: { spacing } }) => {
      spacing.xl;
    }};
  }
  p {
    font-family: ${({ theme: { font } }) => font.heading};
    font-size: 1.125rem;
    margin-bottom: 0;
  }
  span {
    font-size: 11px;
    text-transform: uppercase;
  }
  p,
  span {
    color: ${({ theme }) => theme.description};
  }
`;

export const ImageContainer = styled.div`
  grid-area: Image;
  width: 100%;
  img {
    width: 100%;
  }
`;
