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
              <Link href={"/"} rel="noreferrer">
                Pratik Kapadia
              </Link>
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
              <Link href={"/about"} rel="noreferrer">
                ABOUT
              </Link>
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
              <Link href={"/blog"} rel="noreferrer">
                BLOG
              </Link>
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
            <a
              href="https://twitter.com/PratikKapadia12"
              rel="noreferrer"
              target={"_blank"}
            >
              <TwitterIcon htmlColor={"#FFFFFF"} />
            </a>
            <a
              href={"https://www.linkedin.com/in/pratik-k-88b914a1/"}
              rel="noreferrer"
              target={"_blank"}
            >
              <LinkedInIcon htmlColor={"#FFFFFF"} />
            </a>
            <a
              href={"https://github.com/Pratikkapadia7"}
              rel="noreferrer"
              target={"_blank"}
            >
              <GitHubIcon htmlColor={"#FFFFFF"} />
            </a>
            <a
              href={"mailto:hello@kapadiapratik.com"}
              title={"Mail"}
              rel="noreferrer"
              target={"_blank"}
            >
              <MailIcon htmlColor={"#FFFFFF"} />
            </a>
          </Box>
        </Box>
      </WidthControlledWrapper>
    </Box>
  );
};
export default NavigationBar;
