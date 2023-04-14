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

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("/data/data.js");
      const text = await data.text();
      setText(text);
    }
    fetchData();
  }, []);

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
