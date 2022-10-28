import type { NextPage } from "next";
import { Box } from "@mui/material";
import NavigationBar from "../src/components/global/NavigationBar";
import CoverTitle from "../src/components/home/CoverTitle";
import MainBlogComponent from "../src/components/home/Blogs/MainBlogComponent";
import FooterComponent from "../src/components/global/FooterComponent";
import content from "content/data/content";

const Home: NextPage = () => {
  console.log("CONTENT==>>", content);
  return (
    <Box>
      <NavigationBar />
      <CoverTitle />
      <MainBlogComponent />
      <FooterComponent />
    </Box>
  );
};

export default Home;
