import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  border: 0;
  padding: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.btn.text};
  background: ${({ subType = "dark", theme }) => {
    return theme.btn[subType];
  }};
  &:hover {
    background: ${({ subType = "dark", theme }) => theme.btn[`${subType}Hover`]};
  }
`;

export const Input = styled.input`
  outline: none;
  padding: 0.5rem;
  color: ${({ theme }) => theme.btn.darkHover};
  border: 1px solid #ccc;
  margin-bottom: 0.5rem;
`;

export const TextArea = styled.textarea`
  resize: none;
  outline: none;
  height: 75px;
  color: ${({ theme }) => theme.btn.darkHover};
  border: 1px solid #ccc;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.label};
  letter-spacing: 0.025em;
`;

export const ButtonList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  padding: 4px 0;
`;

export const Title = styled.h2`
  margin: ${({ theme: { spacing } }) => {
    spacing.xl;
  }};
  font-family: ${({ theme: { font } }) => font.heading};
  font-size: 48px;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  margin: 2.5rem 0 150px;
  justify-content: center;
  /* height: 450px; */
  img {
    max-height: 100%;
    max-width: 100%;
  }
`;

export const DetailedInfo = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: -75px;
  width: 75%;
  min-width: 200px;
  justify-content: center;
  margin: 0 auto;
  background: ${({ theme }) => theme.body};
  padding: 1.25rem;
  max-height: 150px;
`;
