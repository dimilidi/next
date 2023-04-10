import styled from "styled-components";
import * as media from "./media-queries";
import {
  SectionContainer,
  SectionHeading,
  SectionSubheading,
  ImageContainer,
} from "~/components";

export const StyledContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  margin: 8rem auto;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${media.StyledContainerDesktop}
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  width: 100%;
  margin: 0.2rem 0;
  text-align: center;
  font-family: sans-serif;
  margin-bottom: 2rem;
`;

export const StyledTitle = styled((props) => <SectionHeading {...props} />)`
  margin: 0;
  padding: 0;
  color: black;
  font-size: 1.8rem;
  ${media.StyledTitleDesktop}
`;

export const StyledUndertitle = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin: 0;
  padding: 0;
  font-size: 1.1rem;
  ${media.StyledUndertitleDesktop}
`;

export const StyledInnerContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  ${media.StyledInnerContainerDesktop}
`;

export const StyledBackgroundContainer = styled(SectionContainer)`
  position: absolute;
  right: 220px;
  height: 100%;
  width: 100%;
  background-image: url("/img/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  ${media.StyledBackgroundContainerDesktop}
`;

export const Wrapper = styled(SectionContainer)`
  position: relative;
  width: 350px;
  margin: 0 auto;
`;
