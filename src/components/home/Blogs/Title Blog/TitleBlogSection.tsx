import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import BlogContentComponent from "../common/BlogContentComponent";

interface TitleBlogSectionProps {
  date: string;
  title: string;
  subTitle: string;
  blogHref: string;
  blogType: "title" | "list";
  imageData: {
    url: string;
    altData: string;
  };
}

const TitleBlogSection: React.FC<TitleBlogSectionProps> = ({
  date,
  title,
  subTitle,
  blogHref,
  blogType,
  imageData,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        marginTop: {
          md: blogType === "title" ? "-100px" : 0,
          xs: blogType === "title" ? "-50px" : 0,
        },
      }}
    >
      <Box>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: {
              sm: blogType === "title" ? "415px" : "240px",
              xs: "200px",
            },
          }}
        >
          <Image
            src={imageData.url}
            alt={imageData.altData}
            layout={"fill"}
            objectFit={"cover"}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <BlogContentComponent
          date={date}
          title={title}
          subTitle={subTitle}
          blogHref={blogHref}
          blogType={blogType}
        />
      </Box>
    </Box>
  );
};
export default TitleBlogSection;
