import { blogDataSingular } from "../../type/blogData.type";
import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

interface MoreSingleBlogComponentProps {
  singleBlogData: blogDataSingular;
}

const MoreSingleBlogComponent: React.FC<MoreSingleBlogComponentProps> = ({
  singleBlogData,
}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <Box
        sx={{
          position: "relative",
          height: {
            xs: "240px",
            md: "280px",
          },
          width: "100%",
        }}
      >
        <Image
          src={singleBlogData?.imageData?.url}
          alt={singleBlogData?.imageData?.altData}
          layout={"fill"}
          objectFit={"cover"}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            padding: { md: "24px 0", xs: "16px 0" },
            background: "rgba(255, 255, 255, -0.7)",
            borderTop: "1px solid rgba(255, 255, 255, 0.5)",
            backdropFilter: "blur(6px)",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ paddingLeft: { md: "24px", xs: "16px" } }}>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                color:
                  singleBlogData?.imageData?.type === "LIGHT"
                    ? "#757575"
                    : "#FFFFFF",
              }}
            >
              Pratik Kapadia
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                color:
                  singleBlogData?.imageData?.type === "LIGHT"
                    ? "#757575"
                    : "#FFFFFF",
              }}
            >
              {singleBlogData?.date}
            </Typography>
          </Box>
          <Box sx={{ paddingRight: { md: "24px", xs: "16px" } }}>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                color:
                  singleBlogData?.imageData?.type === "LIGHT"
                    ? "#757575"
                    : "#FFFFFF",
              }}
            >
              {singleBlogData?.blogTags?.[0]?.text}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "20px",
                md: "24px",
                color: "#101828",
                fontWeight: 600,
              },
            }}
          >
            {singleBlogData?.title}
          </Typography>
          <Typography sx={{ fontSize: "16px", color: "#475467" }}>
            {singleBlogData?.subTitle}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 600,
              color: "#6941C6",
            }}
          >
            Read Post
          </Typography>
          <a
            href={singleBlogData?.blogHref}
            style={{
              color: "#6941C6 !important",
              display: "flex",
              alignItems: "center",
            }}
          >
            <ArrowOutwardIcon fontSize={"small"} />
          </a>
        </Box>
      </Box>
    </Box>
  );
};
export default MoreSingleBlogComponent;
