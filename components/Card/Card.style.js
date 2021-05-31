import styled from "styled-components";

export const CardContainer = styled.a`
  width: 100%;
  display: grid;
  grid-template-columns: 0.75fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  grid-template-areas:
    "Info Image"
    "Info Image";
  padding: ${({ theme: { spacing } }) => `${spacing.xl} 96px`};
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "Image"
      "Info";
  }
`;

export const InfoContainer = styled.div`
  grid-area: Info;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Info = styled.div`
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
    white-space: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  span {
    font-size: 11px;
    text-transform: uppercase;
    white-space: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p,
  span {
    color: ${({ theme }) => theme.description};
  }
  @media (max-width: 768px) {
    h3 {
      font-size: 1.25rem;
    }
    small {
      font-size: 0.75rem;
    }
  }
`;
export const ImageContainer = styled.div`
  grid-area: Image;
  width: 100%;
  img {
    width: 100%;
  }
`;
