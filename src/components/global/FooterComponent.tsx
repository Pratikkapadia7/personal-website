import React from "react";
import { Box, Typography } from "@mui/material";
import WidthControlledWrapper from "./WidthControlledWrapper";
import styles from "./FooterComponent.module.css";
import Link from "next/link";

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
            <Link href={"/"} className={styles.linkTags}>
              <Typography
                sx={{
                  color: "#D0D5DD",
                  fontSize: "14px",
                  fontWeight: "400",
                  cursor: "pointer",
                }}
                className={styles.linkTags}
              >
                Pratik Kapadia &copy; 2022
              </Typography>
            </Link>
          </Typography>
          <Box sx={{ display: "flex", gap: "12px" }}>
            <Link href={"/blogs"}>
              <Typography
                className={styles.linkTags}
                sx={{
                  color: "#D0D5DD",
                  fontSize: "14px",
                  fontWeight: "400",
                  cursor: "pointer",
                }}
              >
                Latest Posts
              </Typography>
            </Link>
            <Typography
              sx={{
                color: "#D0D5DD",
                fontSize: "14px",
                fontWeight: "400",
              }}
            >
              <a
                href={"https://www.linkedin.com/in/pratik-k-88b914a1/"}
                className={styles.linkTags}
                target={"_blank"}
                rel={"noreferrer"}
              >
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
              <a
                href={"https://twitter.com/PratikKapadia12"}
                className={styles.linkTags}
                target={"_blank"}
                rel={"noreferrer"}
              >
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
              <a
                href={"mailto:hello@kapadiapratik.com"}
                className={styles.linkTags}
                title={"Mail"}
                target={"_blank"}
                rel={"noreferrer"}
              >
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
