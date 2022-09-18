import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import ImageConfig from "../../../utils/ImageConfig";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import BlogTagsType from "../../../type/blogTags.type";
import WidthControlledWrapper from "../../global/WidthControlledWrapper";
import TitleBlogComponent from "./TitleBlogComponent";

interface MainBlogComponentProps {}

const MainBlogComponent: React.FC<MainBlogComponentProps> = () => {
  return (
    <WidthControlledWrapper>
      <TitleBlogComponent />
    </WidthControlledWrapper>
  );
};
export default MainBlogComponent;
