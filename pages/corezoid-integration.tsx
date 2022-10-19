import { NextPage } from "next";
import { Box } from "@mui/material";
import WidthControlledWrapper from "../src/components/global/WidthControlledWrapper";
import NavigationBar from "../src/components/global/NavigationBar";
import React from "react";
import CoverSection from "../src/components/corezoid-integration/CoverSection";
import FooterComponent from "../src/components/global/FooterComponent";
import BlogDescriptionSection from "../src/components/corezoid-integration/BlogDescriptionSection";
import CustomDivider from "../src/components/common/CustomDivider";
import MoreBlogsSection from "../src/components/common/MoreBlogsSection";

const CorezoidIntegration: NextPage = () => {
  return (
    <Box>
      <NavigationBar />
      <WidthControlledWrapper>
        <CoverSection />
        <BlogDescriptionSection />
        <CustomDivider />
        <MoreBlogsSection />
      </WidthControlledWrapper>
      <FooterComponent />
    </Box>
  );
};
export default CorezoidIntegration;
