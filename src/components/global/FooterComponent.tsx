import React from "react";
import { Box, Typography } from "@mui/material";
import WidthControlledWrapper from "./WidthControlledWrapper";
import styles from "./FooterComponent.module.css";

interface FooterComponentProps {}

const FooterComponent: React.FC<FooterComponentProps> = () => {
  return (
    <Box
      sx={{
        display: "absolute",
        bottom: 0,
        background: "#1D2939",
        width: "100%",
        padding: " 16px 0",
      }}
    >
      <WidthControlledWrapper>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{ color: "#D0D5DD", fontSize: "14px", fontWeight: "400" }}
          >
            <a href="/" className={styles.linkTags}>
              Pratik Kapadia
            </a>{" "}
            &copy; 2022
          </Typography>
          <Box sx={{ display: "flex", gap: "12px" }}>
            <Typography
              sx={{
                color: "#D0D5DD",
                fontSize: "14px",
                fontWeight: "400",
              }}
            >
              <a href="/" className={styles.linkTags}>
                Latest Posts
              </a>
            </Typography>
            <Typography
              sx={{
                color: "#D0D5DD",
                fontSize: "14px",
                fontWeight: "400",
              }}
            >
              <a href="/" className={styles.linkTags}>
                LinkedIn
              </a>
            </Typography>
            <Typography
              sx={{
                color: "#D0D5DD",
                fontSize: "14px",
                fontWeight: "400",
              }}
            >
              <a href="/" className={styles.linkTags}>
                Twitter
              </a>
            </Typography>
            <Typography
              sx={{
                color: "#D0D5DD",
                fontSize: "14px",
                fontWeight: "400",
              }}
            >
              <a href="/" className={styles.linkTags}>
                Mail
              </a>
            </Typography>
          </Box>
        </Box>
      </WidthControlledWrapper>
    </Box>
  );
};
export default FooterComponent;
