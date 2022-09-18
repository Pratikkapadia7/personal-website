import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import ImageConfig from "../../../utils/ImageConfig";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import BlogTagsType, { BlogTagsTypeProps } from "../../../type/blogTags.type";
import BlogTagComponent from "./BlogTagComponent";

interface TitleBlogComponentProps {}

const TitleBlogComponent: React.FC<TitleBlogComponentProps> = () => {
  const blogTags: Array<{ text: string; blogTagKey: keyof BlogTagsTypeProps }> =
    [
      { text: "Design", blogTagKey: "PrimaryPurple" },
      { text: "Research", blogTagKey: "Indigo" },
      { text: "Presentation", blogTagKey: "Pink" },
    ];
  return (
    <Box>
      {/*Main Blog Component*/}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          marginTop: { md: "-100px", xs: "-50px" },
        }}
      >
        <Box
          sx={{
            height: { sm: "415px", xs: "200px" },
          }}
        >
          <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
            <Image
              src={ImageConfig.MAIN_BLOG_WALLPAPER}
              alt={"Ionic Framework"}
              layout={"fill"}
              objectFit={"cover"}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            // width: { md: "80%", xs: "90%" },
            // margin: "auto",
          }}
        >
          <Typography
            sx={{ color: "#6941C6", fontSize: "14px", fontWeight: 600 }}
          >
            10 Sept 2022
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
                fontSize: { md: "30px", xs: "20px" },
                fontWeight: 600,
              }}
            >
              UX review presentations
            </Typography>
            <a href="/" target={"_blank"}>
              <ArrowOutwardIcon color={"primary"} fontSize={"small"} />
            </a>
          </Box>
          <Typography
            component={"h2"}
            sx={{ color: "#475467", fontSize: "16px", fontWeight: 400 }}
          >
            How do you create compelling presentations that wow your colleagues
            and impress your managers?
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: "8px", marginTop: "24px" }}>
        {blogTags.map(({ text, blogTagKey }) => {
          return <BlogTagComponent text={text} blogTagKey={blogTagKey} />;
        })}
      </Box>
    </Box>
  );
};
export default TitleBlogComponent;
