import React from "react";
import { Box } from "@mui/material";
import BlogTagComponent from "../common/BlogTagComponent";
import TitleBlogSection from "./TitleBlogSection";
import { blogDataSingular } from "../../../../type/blogData.type";

interface TitleBlogComponentProps {
  blogData: blogDataSingular;
}

const TitleBlogComponent: React.FC<TitleBlogComponentProps> = ({
  blogData,
}) => {
  return (
    <Box sx={{ cursor: "pointer", position: "relative" }}>
      <a
        href={"/corezoid-integration"}
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          zIndex: "1",
        }}
      >
        <span></span>
      </a>
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
