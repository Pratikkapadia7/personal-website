import React from "react";
import WidthControlledWrapper from "../../global/WidthControlledWrapper";
import TitleBlogComponent from "./Title Blog/TitleBlogComponent";
import BlogListingComponent from "./Blog List/BlogListingComponent";
import blogData from "../../../data/blogData";

interface MainBlogComponentProps {}

const MainBlogComponent: React.FC<MainBlogComponentProps> = () => {
  return (
    <WidthControlledWrapper>
      <TitleBlogComponent blogData={blogData.title} />
      <BlogListingComponent blogData={blogData.list} />
    </WidthControlledWrapper>
  );
};
export default MainBlogComponent;
