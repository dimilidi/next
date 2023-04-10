import styled from "styled-components";
import * as media from "./media-queries";
import { StyledImageContainerDesktop } from "./media-queries";

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  width: 300px;
  margin: 0 auto;
  position: relative;
  ${media.StyledImageContainerDesktop}
`;
