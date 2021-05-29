import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  border: 0;
  padding: 8px;
  color: ${({ theme }) => theme.btn.text};
  background: ${({ theme }) => theme.btn.dark};
  &:hover {
    background: ${({ theme }) => theme.btn.darkHover};
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
  color: #222;
  letter-spacing: 0.025em;
`;
