import styled from "styled-components";

import { colours } from "./../constants.styles";

export const Header = styled.header`
  margin: 0 2rem;
  text-align: center;
`;

export const SectionList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  list-style: none;
  padding: 0;
`;

export const Text = styled.p`
  color: ${colours.black};
  text-align: justify;
  font-weight: 400;
`;
