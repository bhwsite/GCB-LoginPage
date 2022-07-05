import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 480px;
  padding: 2.5rem 3rem;
  border-radius: 1rem;
  background-color: ${theme.secondColor};
  box-shadow: 0 0.4rem 0.3rem rgba(0, 0, 0, 0.5);

  @media (max-width: 900px) {
    background: none;
    min-height: 620px;
    box-shadow: none;
  }

  .logo {
    display: none;
    @media (max-width: 900px) {
      display: block;
    }
  }

  .containerText {
    margin-block: 2rem 5rem;
  }
`;
