import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  position: relative;
  margin: 10rem 4rem;

  input {
    width: 100%;
    height: 4.5rem;
    font-size: 2rem;
    font-weight: ${theme.fonts.weight.normal};
    color: ${theme.primaryColor};
    border: none;
    border-bottom: 0.1rem solid #423b32;
    outline: none;

    :focus + span,
    :valid + span {
      transform: translateY(-45px);
      font-size: 3rem;
      color: ${theme.label};
    }
  }

  span {
    position: absolute;
    left: 0;
    top: 0.5rem;
    pointer-events: none;
    transition: 0.5s;
    font-size: 2.4rem;
    color: ${theme.primaryColor};
  }
`;
