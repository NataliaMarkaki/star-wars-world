import styled from "styled-components";

import { colours, media } from "../../constants.styles";

export const CardWrapper = styled.li`
  border-radius: 0.625rem;
  display: inline-flex;
  margin: 0.625rem;
  width: 90%;
`;


export const Description = styled.div`
  background: ${colours.gray};
  border-radius: 0.625rem;
  padding: 0 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: ${media.medium}) {
    border-radius: 0 0.625rem 0.625rem 0;
    overflow: scroll;
  }
`;

export const Title = styled.h2`
  color: ${colours.black};
  font-weight: 400;
  text-align: center;
  letter-spacing: 1px;
  @media screen and (min-width: ${media.medium}) {
    text-align: left;
  }
`;

export const Text = styled.div`
  color: ${colours.black};
  font-weight: 400;
  margin: 0.75rem 0;
`;

export const BoldText = styled.div`
  color: ${colours.black};
  font-weight: 700;
  width: 100%;
`;
