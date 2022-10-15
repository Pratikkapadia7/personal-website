import React from "react";
import { Box, Typography } from "@mui/material";
import WidthControlledWrapper from "../global/WidthControlledWrapper";

interface CoverTitleProps {}

const CoverTitle: React.FC<CoverTitleProps> = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: { md: "500px", xs: "300px" },
        background: "#1D2939",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <WidthControlledWrapper>
        <Typography
          component={"h1"}
          sx={{
            fontSize: { md: "40px", sm: "32px", xs: "24px" },
            color: "#FFFFFF",
            fontWeight: "500",
            width: {
              xs: "90%",
              md: "70%",
            },
            margin: "auto",
          }}
        >
          I&apos;m Pratik Kapadia, I am a Software Engineer and I help companies
          creating quality softwares.
        </Typography>
      </WidthControlledWrapper>
    </Box>
  );
};
export default CoverTitle;
