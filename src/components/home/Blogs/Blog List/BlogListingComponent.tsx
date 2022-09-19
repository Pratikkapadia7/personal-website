import React from "react";
import { Box, Grid } from "@mui/material";
import { blogDataSingular } from "../MainBlogComponent";
import TitleBlogComponent from "../Title Blog/TitleBlogComponent";

interface BlogListingComponentProps {
  blogData: Array<blogDataSingular>;
}

const BlogListingComponent: React.FC<BlogListingComponentProps> = ({
  blogData,
}) => {
  return (
    <Box sx={{ py: "32px" }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {blogData.map((blogItem) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <TitleBlogComponent blogData={blogItem} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
export default BlogListingComponent;
