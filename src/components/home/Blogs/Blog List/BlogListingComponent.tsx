import React from "react";
import { Box, Grid } from "@mui/material";
import TitleBlogComponent from "../Title Blog/TitleBlogComponent";
import { blogDataSingular } from "../../../../type/blogData.type";

interface BlogListingComponentProps {
  blogData: Array<blogDataSingular>;
}

const BlogListingComponent: React.FC<BlogListingComponentProps> = ({
  blogData,
}) => {
  return (
    <Box sx={{ py: "32px" }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {blogData.map((blogItem, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <TitleBlogComponent blogData={blogItem} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
export default BlogListingComponent;
