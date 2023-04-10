import { forwardRef } from "react";
import { options } from "../../public/data/data.js";
import Image from "next/dist/client/image";
import { Card } from "../../collections";
import { StackContainer, ImageContainer } from "../../components";
import {
  StyledContainer,
  StyledInnerContainer,
  StyledBackgroundContainer,
  StyledTitle,
  StyledTextContainer,
  StyledUndertitle,
  Wrapper,
} from "./elements";

export const Services = forwardRef(
  ({ image, title, undertitle, ...props }, ref) => {
    return (
      <div ref={ref}>
        <StyledContainer {...props}>
          <StyledTextContainer>
            <StyledTitle>{title}</StyledTitle>
            <StyledUndertitle>{undertitle}</StyledUndertitle>
          </StyledTextContainer>
          <StyledInnerContainer>
            <Wrapper>
              <StyledBackgroundContainer />
              <ImageContainer>
                <Image
                  src={image.src}
                  width={image.width}
                  height={image.height}
                />
              </ImageContainer>
            </Wrapper>
            <StackContainer>
              {options.map((option, index) => {
                return <Card key={index} option={option} />;
              })}
            </StackContainer>
          </StyledInnerContainer>
        </StyledContainer>
      </div>
    );
  }
);
