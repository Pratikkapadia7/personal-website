import React from "react";
import BlogTagsType, { BlogTagsTypeProps } from "../../../type/blogTags.type";
import { Box, Typography } from "@mui/material";

interface BlogTagComponentProps {
  text: string;
  blogTagKey: keyof BlogTagsTypeProps;
}

const BlogTagComponent: React.FC<BlogTagComponentProps> = ({
  text,
  blogTagKey,
}) => {
  return (
    <Box
      sx={{
        padding: "2px 10px",
        borderRadius: "12px",
        color: BlogTagsType[blogTagKey].color,
        background: BlogTagsType[blogTagKey].backgroundColor,
      }}
    >
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: "500",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};
export default BlogTagComponent;
