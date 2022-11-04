import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { blogDataSingular } from "../../type/blogData.type";
import MoreSingleBlogComponent from "./moreSingleBlogComponent";

interface MoreBlogsSectionProps {
  moreBlogData: Array<blogDataSingular>;
}

const MoreBlogsSection: React.FC<MoreBlogsSectionProps> = ({
  moreBlogData,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: {
          xs: "48px",
          md: "64px",
        },
        py: {
          xs: "64px",
          md: "80px",
        },
      }}
    >
      <Typography
        sx={{
          color: "#101828",
          fontSize: { xs: "30px", md: "36px" },
          fontWeight: 600,
        }}
      >
        From the blog
      </Typography>
      <Box>
        <Grid container rowSpacing={3} columnSpacing={3}>
          {moreBlogData?.map((singleBlockData, index) => {
            return (
              <Grid key={index} item xs={12} sm={6}>
                <MoreSingleBlogComponent singleBlogData={singleBlockData} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};
export default MoreBlogsSection;
