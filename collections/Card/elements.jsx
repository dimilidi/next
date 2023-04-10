import styled from "styled-components";
import * as media from "./media-queries";
import {
  SectionContainer,
  SectionTinyHeading,
  SectionParagraph,
} from "~/components";

export const StyledStack = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  padding: 1.5rem;
  width: 100%;
  height: 140px;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  background: #eee;
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    outline: 2px solid ${({ theme }) => theme.main};
  }
`;

export const StyledStackTitle = styled((props) => (
  <SectionTinyHeading {...props} />
))`
  margin: 0 0 0.3rem 0;
  padding: 0;
  color: black;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    color: ${({ theme }) => theme.main};
    text-decoration: underline;
  }

  ${media.StyledStackTitleDesktop}
`;

export const StyledParagraph = styled((props) => (
  <SectionParagraph {...props} />
))`
  font-size: 0.8rem;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  ${media.StyledParagraphDesktop}
`;

export const StyledStackTextWrapper = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const StyledIconContainer = styled(({ ...props }) => <div {...props} />)`
  width: 4rem;
`;
