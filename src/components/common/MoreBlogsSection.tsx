import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import ImageConfig from "../../utils/ImageConfig";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

interface MoreBlogsSectionProps {}

const MoreBlogsSection: React.FC<MoreBlogsSectionProps> = () => {
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
          <Grid item xs={12} sm={6}>
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
                  src={ImageConfig.MAIN_BLOG_WALLPAPER}
                  alt={"Image"}
                  layout={"fill"}
                  objectFit={"cover"}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    padding: "24px",
                    background: "rgba(255, 255, 255, 0.3)",
                    borderTop: "1px solid rgba(255, 255, 255, 0.5)",
                    backdropFilter: "blur(12px)",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#757575",
                      }}
                    >
                      Pratik Kapadia
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 400,
                        color: "#757575",
                      }}
                    >
                      20 Jan 2022
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#757575",
                      }}
                    >
                      Design
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
                    UX review presentations
                  </Typography>
                  <Typography sx={{ fontSize: "16px", color: "#475467" }}>
                    How do you create compelling presentations that wow your
                    colleagues and impress your managers?
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
                    href={"/"}
                    target={"_blank"}
                    rel="noreferrer"
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
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default MoreBlogsSection;
