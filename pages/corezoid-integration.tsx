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
import Head from "next/head";
import blogData from "../src/data/blogData";

const CorezoidIntegration: NextPage = () => {
  const singleBlogData = blogData?.find(
    (blogItem) => blogItem.slug === "corezoid-integration"
  );
  const moreBlogData = blogData?.filter(
    (blogItem) => blogItem.slug !== "corezoid-integration"
  );
  return (
    <>
      <Head>
        <title>Corezoid Architecture Interface</title>
        <meta
          name="description"
          content="Initialization of Corezoid and exposing its endpoints to outside environment."
        />
        <meta name="author" content="Pratik Kapadia" />
        <meta
          name="keywords"
          content="Pratik, Kapadia, Corezoid, Integration, architecture, endpoints, API"
        />
        <link rel="shortcut icon" href="/favicon.ico?" type="image/x-icon" />
      </Head>
      <Box>
        <NavigationBar />
        <WidthControlledWrapper>
          {singleBlogData && <CoverSection blogData={singleBlogData} />}
          <BlogDescriptionSection />
          <CustomDivider />
          <MoreBlogsSection moreBlogData={moreBlogData} />
        </WidthControlledWrapper>
        <FooterComponent />
      </Box>
    </>
  );
};
export default CorezoidIntegration;
