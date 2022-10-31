import type { NextPage } from "next";
import { Box } from "@mui/material";
import NavigationBar from "../src/components/global/NavigationBar";
import CoverTitle from "../src/components/home/CoverTitle";
import MainBlogComponent from "../src/components/home/Blogs/MainBlogComponent";
import FooterComponent from "../src/components/global/FooterComponent";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Pratik Kapadia</title>
        <meta
          name="description"
          content="This is my portfolio page. The purpose of this page is to introduce myself, my blogs, and show off a little bit of my web development skills."
        />
        <meta name="author" content="Pratik Kapadia" />
        <meta
          name="keywords"
          content="Pratik, Kapadia, Portfolio, Frontend, Fullstack, Backend, Software Engineer, Engineer, Blogs,"
        />
        <meta
          property="og:image"
          content="https://www.kapadiapratik.com/assets/profile-picture.png"
          key="ogimage"
        />
        <link rel="shortcut icon" href="/favicon.ico?" type="image/x-icon" />
      </Head>
      <NavigationBar />
      <CoverTitle />
      <MainBlogComponent />
      <FooterComponent />
    </Box>
  );
};

export default Home;
