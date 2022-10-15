import { NextPage } from "next";
import { Box, Typography } from "@mui/material";
import WidthControlledWrapper from "../src/components/global/WidthControlledWrapper";
import NavigationBar from "../src/components/global/NavigationBar";
import React from "react";
import CoverSection from "../src/components/corezoid-integration/CoverSection";
import FooterComponent from "../src/components/global/FooterComponent";
import Image from "next/image";
import ImageConfig from "../src/utils/ImageConfig";

const CorezoidIntegration: NextPage = () => {
  return (
    <Box>
      <NavigationBar />
      <WidthControlledWrapper>
        <CoverSection />
        <Box
          sx={{
            pb: {
              xs: "64px",
              md: "100px",
            },
            width: {
              xs: "100%",
              md: "65%",
            },
            margin: "auto",
          }}
        >
          <Box>
            <Typography
              component={"h3"}
              sx={{
                color: "#101828",
                fontSize: {
                  xs: "24px",
                  md: "30px",
                },
                fontWeight: 600,
                pb: {
                  xs: "16px",
                  md: "20px",
                },
              }}
            >
              Introduction
            </Typography>
            <Typography
              component={"h3"}
              sx={{
                color: "#475467",
                fontSize: {
                  xs: "14px",
                  md: "18px",
                },
                lineHeight: {
                  xs: "24px",
                  md: "28px",
                },
                fontWeight: 400,
                pb: {
                  xs: "12px",
                  md: "16px",
                },
              }}
            >
              Before taking a dig in about how corezoid works, let&apos;s talk
              about what corezoid is actually. So talking in layman&apos;s
              language, Corezoid is an engine that lets you run your processes
              or algorithms on their server. It helps you with their User
              Interface for building your processes as you are building
              flowcharts.
            </Typography>
            <Typography
              component={"h3"}
              sx={{
                color: "#475467",
                fontSize: {
                  xs: "14px",
                  md: "18px",
                },
                lineHeight: {
                  xs: "24px",
                  md: "28px",
                },
                fontWeight: 400,
                pb: {
                  xs: "40px",
                  md: "48px",
                },
              }}
            >
              As we start building our processes, Corezoid helps us begin with
              start and end nodes. Nodes are engine processors where you can
              find your responses from individual processes which corezoid
              supports.
            </Typography>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: {
                  xs: "240px",
                  md: "480px",
                },
                borderRadius: "12px",
              }}
            >
              <Image
                src={ImageConfig.COREZOID_INTEGRATION_IMAGE}
                alt={"Corezoid Integration Image"}
                layout={"fill"}
                objectFit={"cover"}
                width={"100%"}
                height={"100%"}
                style={{
                  borderRadius: "12px",
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            height: "1px",
            backgroundColor: "#EAECF0",
            mb: { xs: "64px", md: "100px" },
          }}
        ></Box>
      </WidthControlledWrapper>
      <FooterComponent />
    </Box>
  );
};
export default CorezoidIntegration;
