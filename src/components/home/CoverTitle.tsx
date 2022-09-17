import React from "react";
import { Box, Typography } from "@mui/material";

interface CoverTitleProps {}

const CoverTitle: React.FC<CoverTitleProps> = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "500px",
        background: "#1D2939",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        component={"h1"}
        sx={{
          fontSize: "32px",
          color: "#FFFFFF",
          fontWeight: "500",
          width: {
            xs: "90%",
            md: "70%",
          },
          margin: "auto",
        }}
      >
        I'm Pratik Kapadia, I am a Software Engineer and I help companies
        creating quality softwares.
      </Typography>
    </Box>
  );
};
export default CoverTitle;
