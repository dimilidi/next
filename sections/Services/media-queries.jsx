import { css } from "styled-components";

export const StyledContainerDesktop = css`
  @media screen and (min-width: 1024px) {
    width: 100%;
    gap: 3rem;
    height: 100vh;
  }
`;

export const StyledTitleDesktop = css`
  @media screen and (min-width: 1024px) {
    font-size: 3rem;
  }
`;

export const StyledUndertitleDesktop = css`
    @media screen and (min-width: 1024px) {
        font-size: 1.5rem;
  `;

export const StyledInnerContainerDesktop = css`
  @media screen and (min-width: 1024px) {
    width: 80%;
    max-width: 900px;
    height: 37rem;
    flex-direction: row;
  }
`;

export const StyledStackTitleDesktop = css`
  @media screen and (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;

export const StyledParagraphDesktop = css`
  @media screen and (min-width: 1024px) {
    font-size: 0.9rem;
  }
`;

export const StyledBackgroundContainerDesktop = css`
  @media screen and (min-width: 1024px) {
    right: 260px;
  }
`;
