import React from "react";
import WidthControlledWrapper from "../../global/WidthControlledWrapper";
import TitleBlogComponent from "./Title Blog/TitleBlogComponent";
import BlogListingComponent from "./Blog List/BlogListingComponent";
import blogData from "../../../data/blogData";

interface MainBlogComponentProps {}

const MainBlogComponent: React.FC<MainBlogComponentProps> = () => {
  const coverBlogData = blogData?.find(
    (blogItems) => blogItems.slug === "corezoid-integration"
  );
  const listBlogData = blogData?.filter(
    (blogItem) => blogItem.slug !== "corezoid-integration"
  );
  return (
    <WidthControlledWrapper>
      {coverBlogData && <TitleBlogComponent blogData={coverBlogData} />}
      <BlogListingComponent blogData={listBlogData} />
    </WidthControlledWrapper>
  );
};
export default MainBlogComponent;
