import React from "react";
import { Box, Typography } from "@mui/material";
import BlogTagComponent from "../home/Blogs/common/BlogTagComponent";
import Image from "next/image";
import { blogDataSingular } from "../../type/blogData.type";
import InsertLinkIcon from "@mui/icons-material/InsertLink";

interface CoverSectionProps {
  blogData: blogDataSingular;
}

const CoverSection: React.FC<CoverSectionProps> = ({ blogData }) => {
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
        >{`Published ${blogData.date}`}</Typography>
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
          {blogData.title}
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
          {blogData.subTitle}
        </Typography>
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
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
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
            src={blogData.imageData.url}
            alt={blogData.imageData.altData}
            layout={"fill"}
            objectFit={"cover"}
            width={"100%"}
            height={"100%"}
          />
        </Box>
        {blogData?.imageCourtesy && (
          <Box
            sx={{
              display: "flex",
              gap: "4px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <InsertLinkIcon />
            <Typography sx={{ fontSize: "14px", color: "#475467" }}>
              Image courtesy of{" "}
              <span
                style={{
                  textDecoration: "underline",
                }}
              >
                {" "}
                <a href={blogData?.imageCourtesy?.url} target={"_blank"}>
                  {blogData?.imageCourtesy?.name}
                </a>{" "}
              </span>
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};
export default CoverSection;
