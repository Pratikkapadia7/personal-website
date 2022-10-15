import React from "react";
import { Box, Typography } from "@mui/material";
import blogData from "../../data/blogData";
import BlogTagComponent from "../home/Blogs/common/BlogTagComponent";
import Image from "next/image";
import ImageConfig from "../../utils/ImageConfig";
import InsertLinkIcon from "@mui/icons-material/InsertLink";

interface BlogsTitleProps {}

const BlogsTitle: React.FC<BlogsTitleProps> = () => {
  return (
    <Box sx={{ py: "96px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          component={"p"}
          sx={{
            color: "#7F56D9",
            fontSize: "16px",
            fontWeight: "600",
            marginBottom: "12px",
          }}
        >{`Published ${blogData.title.date}`}</Typography>
        <Typography
          component={"h1"}
          sx={{
            color: "#101828",
            fontSize: "48px",
            fontWeight: "600",
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          {blogData.title.title}
        </Typography>
        <Typography
          component={"h1"}
          sx={{
            color: "#475467",
            fontSize: "20px",
            fontWeight: "400",
            marginBottom: "42px",
            textAlign: "center",
          }}
        >
          {blogData.title.subTitle}
        </Typography>
        <Box sx={{ display: "flex", gap: "8px", marginBottom: "66px" }}>
          {blogData.title.blogTags.map(({ text, blogTagKey }, index) => {
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
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: {
            sm: "415px",
            xs: "200px",
          },
        }}
      >
        <Image
          src={ImageConfig.COREZOID_WALLPAPER}
          alt={"Corezoid Based Wallpaper"}
          layout={"fill"}
          objectFit={"cover"}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", my: "8px" }}>
        <Typography
          sx={{
            color: "#475467",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            gap: "6px",
            fontSize: "14px",
          }}
        >
          <InsertLinkIcon /> Image courtesy via{" "}
          <a
            href={"https://www.pexels.com/"}
            style={{ textDecoration: "underline" }}
          >
            Pexels
          </a>
        </Typography>
      </Box>
    </Box>
  );
};
export default BlogsTitle;
