import type { NextPage } from "next";
import { Box } from "@mui/material";
import NavigationBar from "../src/components/global/NavigationBar";
import CoverTitle from "../src/components/home/CoverTitle";
import MainBlogComponent from "../src/components/home/Blogs/MainBlogComponent";
import FooterComponent from "../src/components/global/FooterComponent";

const Home: NextPage = () => {
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
