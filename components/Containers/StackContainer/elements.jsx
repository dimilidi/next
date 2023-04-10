import styled from "styled-components";
import { StyledStackContainerDesktop } from "./media-queries";

export const StyledStackContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  margin: 1rem auto;
  width: 80%;
  max-width: 330px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  ${StyledStackContainerDesktop}
`;
