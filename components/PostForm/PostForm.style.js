import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding: 1rem;
`;

export const LeftPanelContainer = styled.div`
  padding: 0 1rem;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const RightPanelContainer = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`;

export const ErrorMessage = styled.small`
  color: #bb0000;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`
