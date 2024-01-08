import React from "react";
// import { PDFDownloadLink } from "@react-pdf/renderer";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Container } from "components/common";
import Sabrina from "../../../assets/illustrations/sabrina.jpeg";

import {
  Wrapper,
  ConsultancyWrapper,
  ConsulWrapper,
  ProfilePicture,
  SkillsColumn,
} from "./styles";

export const Consultancy = () => {
  return (
    <Wrapper id='consultancy'>
      <ConsultancyWrapper as={Container}>
        <ConsulWrapper>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro officia
          amet in eaque nobis laboriosam eius fugiat blanditiis corrupti animi?
          Itaque laudantium id totam dicta, minima in dolore quam at! Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus neque
          esse inventore dolore labore vitae ut perferendis, sint magnam aperiam
          dolores ratione commodi eius eum, accusamus eos itaque libero fugiat.
        </ConsulWrapper>
      </ConsultancyWrapper>
    </Wrapper>
  );
};
