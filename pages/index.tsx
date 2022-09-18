import type { NextPage } from "next";
import { Box } from "@mui/material";
import NavigationBar from "../src/components/global/NavigationBar";
import CoverTitle from "../src/components/home/CoverTitle";
import MainBlogComponent from "../src/components/home/Blogs/MainBlogComponent";

const Home: NextPage = () => {
  return (
    <Box>
      <NavigationBar />
      <CoverTitle />
      <MainBlogComponent />
    </Box>
  );
};

export default Home;
