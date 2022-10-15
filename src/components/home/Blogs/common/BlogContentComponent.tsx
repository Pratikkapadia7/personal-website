import { Box, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import React from "react";

interface BlogContentComponentProps {
  date: string;
  title: string;
  subTitle: string;
  blogHref: string;
  blogType: "title" | "list";
}

const BlogContentComponent: React.FC<BlogContentComponentProps> = ({
  date,
  title,
  subTitle,
  blogHref = "/",
  blogType = "list",
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        marginTop: "16px",
      }}
    >
      <Typography sx={{ color: "#6941C6", fontSize: "14px", fontWeight: 600 }}>
        {date}
      </Typography>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Typography
          component={"h2"}
          sx={{
            color: "#101828",
            fontSize: {
              md: blogType === "title" ? "30px" : "24px",
              xs: "20px",
            },
            fontWeight: 600,
          }}
        >
          {title}
        </Typography>
        <a href={blogHref} target={"_blank"} rel="noreferrer">
          <ArrowOutwardIcon color={"primary"} fontSize={"small"} />
        </a>
      </Box>
      <Typography
        component={"h2"}
        sx={{ color: "#475467", fontSize: "16px", fontWeight: 400 }}
      >
        {subTitle}
      </Typography>
    </Box>
  );
};
export default BlogContentComponent;
