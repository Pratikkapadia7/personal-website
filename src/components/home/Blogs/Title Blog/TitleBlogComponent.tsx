import React from "react";
import { Box } from "@mui/material";
import BlogTagComponent from "../common/BlogTagComponent";
import TitleBlogSection from "./TitleBlogSection";
import { blogDataSingular } from "../MainBlogComponent";

interface TitleBlogComponentProps {
  blogData: blogDataSingular;
}

const TitleBlogComponent: React.FC<TitleBlogComponentProps> = ({
  blogData,
}) => {
  return (
    <Box>
      <TitleBlogSection
        title={blogData.title}
        subTitle={blogData.subTitle}
        blogHref={blogData.blogHref}
        blogType={blogData.blogType}
        imageData={blogData.imageData}
        date={blogData.date}
      />
      <Box sx={{ display: "flex", gap: "8px", marginTop: "24px" }}>
        {blogData.blogTags.map(({ text, blogTagKey }, index) => {
          return (
            <BlogTagComponent
              key={`${index}${text}`}
              text={text}
              blogTagKey={blogTagKey}
            />
          );
        })}
      </Box>
    </Box>
  );
};
export default TitleBlogComponent;
