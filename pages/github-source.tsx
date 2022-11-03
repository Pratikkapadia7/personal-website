import { NextPage } from "next";
import { Box } from "@mui/material";
import Head from "next/head";
import NavigationBar from "../src/components/global/NavigationBar";
import WidthControlledWrapper from "../src/components/global/WidthControlledWrapper";
import CoverSection from "../src/components/corezoid-integration/CoverSection";
import BlogDescriptionSection from "../src/components/github-source/BlogDescriptionSection";
import CustomDivider from "../src/components/common/CustomDivider";
import MoreBlogsSection from "../src/components/common/MoreBlogsSection";
import FooterComponent from "../src/components/global/FooterComponent";
import React from "react";
import blogData from "../src/data/blogData";

const GithubSource: NextPage = () => {
  const singleBlogData = blogData?.find(
    (blogItem) => blogItem.slug === "github-source"
  );
  return (
    <>
      <Head>
        <title>Github Source</title>
        <meta
          name="description"
          content="Where to find this project on GitHub.."
        />
        <meta name="author" content="Pratik Kapadia" />
        <meta
          name="keywords"
          content="Pratik, Kapadia, Github, Untitled, architecture, Design, Figma"
        />
        <link rel="shortcut icon" href="/favicon.ico?" type="image/x-icon" />
      </Head>
      <Box>
        <NavigationBar />
        <WidthControlledWrapper>
          {singleBlogData && <CoverSection blogData={singleBlogData} />}
          <BlogDescriptionSection />
          <CustomDivider />
          <MoreBlogsSection />
        </WidthControlledWrapper>
        <FooterComponent />
      </Box>
    </>
  );
};
export default GithubSource;
