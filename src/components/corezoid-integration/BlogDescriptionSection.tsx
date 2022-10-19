import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import ImageConfig from "../../utils/ImageConfig";

interface BlogDescriptionSectionProps {}

const BlogDescriptionSection: React.FC<BlogDescriptionSectionProps> = () => {
  return (
    <Box
      sx={{
        pb: {
          xs: "64px",
          md: "80px",
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
          Before taking a dig in about how corezoid works, let&apos;s talk about
          what corezoid is actually. So talking in layman&apos;s language,
          Corezoid is an engine that lets you run your processes or algorithms
          on their server. It helps you with their User Interface for building
          your processes as you are building flowcharts.
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
          As we start building our processes, Corezoid helps us begin with start
          and end nodes. Nodes are engine processors where you can find your
          responses from individual processes which corezoid supports.
        </Typography>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: {
              xs: "240px",
              md: "480px",
            },
            backgroundColor: "#D4E1E5",
            borderRadius: "12px",
            mb: {
              xs: "40px",
              md: "48px",
            },
          }}
        >
          <Image
            src={ImageConfig.COREZOID_INTEGRATION_IMAGE}
            alt={"Corezoid Integration Image"}
            layout={"fill"}
            objectFit={"contain"}
            style={{
              borderRadius: "12px",
            }}
          />
        </Box>
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
          Starting with the starting node, it's nothing but where your logic
          starts you move on from node to node. As we move towards the node,
          corezoid gives every response value at the end nodes. Corezoid also
          has nodes based on code-logic, conditional statements and provides API
          that we usually perform in our backend architecture.
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
          After your process is complete and you have your responses. It is time
          to expose the process to the outside environment. Corezoid supports
          three APIs from which API-V2 and SyncAPI widely used. Corezoid API-V2
          and Sync-API have a difference which is V2 does not returns custom
          response to the outside environment where as Sync-API is used for
          return custom responses to the outside environment.
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
              xs: "16px",
              md: "16px",
            },
          }}
        >
          Corezoid can be an effective engine when it comes to User Interface.
          As there are inbuilt processes and is widely used in MNCs for their
          processes and can be supervised and also a human-takeover is easily
          possible in the engine as compared to our native engines.
        </Typography>
      </Box>
    </Box>
  );
};
export default BlogDescriptionSection;
