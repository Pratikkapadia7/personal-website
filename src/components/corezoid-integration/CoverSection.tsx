import React from "react";
import { Box, Typography } from "@mui/material";
import BlogTagComponent from "../home/Blogs/common/BlogTagComponent";
import Image from "next/image";
import { blogDataSingular } from "../../type/blogData.type";
import ImageConfig from "../../utils/ImageConfig";

const corezoidIntegrationData: blogDataSingular = {
  date: "23 Sept 2022",
  title: "Corezoid Architecture Interface",
  subTitle:
    "How do you initiate Corezoid and expose its endpoints to outside environment?",
  blogHref: "/",
  blogTags: [
    { text: "Design", blogTagKey: "PrimaryPurple" },
    { text: "Research", blogTagKey: "Indigo" },
    { text: "Architecture", blogTagKey: "BlueLight" },
  ],
  blogType: "title",
  imageData: {
    url: ImageConfig.COREZOID_WALLPAPER,
    altData: "Corezoid Wallpaper",
  },
};

interface CoverSectionProps {}

const CoverSection: React.FC<CoverSectionProps> = ({}) => {
  return (
    <Box
      sx={{
        py: {
          xs: "64px",
          md: "96px",
        },
        display: "flex",
        flexDirection: "column",
        gap: {
          xs: "48px",
          md: "66px",
        },
      }}
    >
      {/*Cover Title Block*/}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: " center",
        }}
      >
        <Typography
          sx={{
            color: "#7F56D9",
            fontWeight: 600,
            mb: "12px",
            fontSize: { xs: "14px", md: "16px" },
          }}
        >{`Published ${corezoidIntegrationData.date}`}</Typography>
        <Typography
          sx={{
            color: "#101828",
            fontWeight: 600,
            textAlign: "center",
            mb: {
              xs: "16px",
              md: "24px",
            },
            fontSize: {
              xs: "36px",
              md: "48px",
            },
          }}
        >
          {corezoidIntegrationData.title}
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            color: "#475467",
            fontWeight: 400,
            mb: {
              xs: "32px",
              md: "40px",
            },
            fontSize: {
              xs: "18px",
              md: "20px",
            },
          }}
        >
          {corezoidIntegrationData.subTitle}
        </Typography>
        <Box sx={{ display: "flex", gap: "8px", marginTop: "24px" }}>
          {corezoidIntegrationData.blogTags.map(
            ({ text, blogTagKey }, index) => {
              return (
                <BlogTagComponent
                  key={`${index}${text}`}
                  text={text}
                  blogTagKey={blogTagKey}
                />
              );
            }
          )}
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          height: {
            md: "560px",
            xs: "240px",
          },
          width: "100%",
        }}
      >
        <Image
          src={corezoidIntegrationData.imageData.url}
          alt={corezoidIntegrationData.imageData.altData}
          layout={"fill"}
          objectFit={"cover"}
          width={"100%"}
          height={"100%"}
        />
      </Box>
    </Box>
  );
};
export default CoverSection;
