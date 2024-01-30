import styled from "styled-components";
import Image from "next/image.js";

export const StyledImage = styled(Image)`
  object-fit: cover;
  height: auto;
  @media screen and (max-width: 580px) {
    width: 100%;
  }
`;
