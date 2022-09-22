import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import WidthControlledWrapper from "./WidthControlledWrapper";

interface NavigationBarProps {}

const NavigationBar: React.FC<NavigationBarProps> = () => {
  return (
    <Box
      sx={{
        background: "#1D2939",
        width: "100%",
        py: "24px",
      }}
    >
      <WidthControlledWrapper>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "16px",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "#FFFFFF",
                fontWeight: "500",
                fontSize: { md: "24px", xs: "20px" },
              }}
            >
              <Link href={"/"}>Pratik Kapadia</Link>
            </Typography>
            <Typography
              sx={{
                color: "#FFFFFF",
                fontWeight: "400",
                fontSize: { md: "16px", xs: "14px" },
                display: "flex",
                alignItems: "center",
              }}
            >
              <Link href={"/about"}>ABOUT</Link>
            </Typography>
            <Typography
              sx={{
                color: "#FFFFFF",
                fontWeight: "400",
                fontSize: { md: "16px", xs: "14px" },
                display: "flex",
                alignItems: "center",
              }}
            >
              <Link href={"/"}>BLOG</Link>
            </Typography>
          </Box>
          <Box
            sx={{
              display: {
                md: "flex",
                xs: "none",
              },
              gap: "16px",
            }}
          >
            <a href="/" target={"_blank"}>
              <TwitterIcon htmlColor={"#FFFFFF"} />
            </a>
            <a href={"/"} target={"_blank"}>
              <LinkedInIcon htmlColor={"#FFFFFF"} />
            </a>
            <a href={"https://www.google.com/"} target={"_blank"}>
              <GitHubIcon htmlColor={"#FFFFFF"} />
            </a>
            <a href={"/"} target={"_blank"}>
              <MailIcon htmlColor={"#FFFFFF"} />
            </a>
          </Box>
        </Box>
      </WidthControlledWrapper>
    </Box>
  );
};
export default NavigationBar;
