import React, { useEffect, useState } from "react";
import Image from "next/dist/client/image";
import {
  StyledStack,
  StyledStackTitle,
  StyledParagraph,
  StyledStackTextWrapper,
  StyledIconContainer,
} from "./elements";

export const Card = ({ title, description, icon, ...props }) => {
  const [text, setText] = useState("");


  return (
    <StyledStack>
      <StyledIconContainer>
        <Image src={icon} alt={title} width={40} height={40} />
      </StyledIconContainer>
      <StyledStackTextWrapper>
        <StyledStackTitle>{title}</StyledStackTitle>
        <StyledParagraph
          dangerouslySetInnerHTML={{ __html:description }}
        />
      </StyledStackTextWrapper>
    </StyledStack>
  );
};
