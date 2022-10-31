import { NextPage } from "next";
import NavigationBar from "../src/components/global/NavigationBar";
import { Box, Typography } from "@mui/material";
import WidthControlledWrapper from "../src/components/global/WidthControlledWrapper";
import Head from "next/head";

const AboutUs: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>About me</title>
        <meta name="description" content="About Pratik Kapadia" />
        <meta name="author" content="Pratik Kapadia" />
        <meta
          name="keywords"
          content="Pratik, Kapadia, Portfolio, Frontend, Fullstack, Backend, Software Engineer, Engineer, Blogs,"
        />
        <link rel="shortcut icon" href="/favicon.ico?" type="image/x-icon" />
      </Head>
      <NavigationBar />
      <WidthControlledWrapper>
        <Box sx={{ width: "80%", margin: "auto" }}>
          <Box sx={{ margin: "32px auto" }}>
            <Typography
              component={"h1"}
              sx={{ fontSize: "32px", fontWeight: "600" }}
            >
              About
            </Typography>
          </Box>
          <Box
            sx={{
              margin: "28px 0",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <Typography sx={{ fontSize: "22px" }}>
              Hi, I am Pratik, a Software Engineer and I help companies build
              software in form of Web Applications.
            </Typography>
            <Typography sx={{ fontSize: "22px" }}>
              And this is my life&apos;s story, I am on my way of changing my
              life&apos;s course of events. As it has been a bumpy ride from
              being an Electrical Engineer to a Management student and now
              trying my luck in Tech Industry and I think this is the time to
              settle. As I have been coding since last 10 years but I realized
              it very late to pursue my passion but you know what better late
              than never.
            </Typography>
            <Typography sx={{ fontSize: "22px" }}>
              You can reach out to me on any of the social apps or email me at
              @pratikkapadia
            </Typography>
          </Box>
        </Box>
      </WidthControlledWrapper>
    </Box>
  );
};
export default AboutUs;
