import type { NextPage } from "next";
import { Box, Typography } from "@mui/material";
import NavigationBar from "../src/components/global/NavigationBar";
import CoverTitle from "../src/components/home/CoverTitle";
import Image from "next/image";
import ImageConfig from "../src/utils/ImageConfig";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Home: NextPage = () => {
  return (
    <Box>
      <NavigationBar />
      <CoverTitle />
      {/*Blog Component*/}
      <Box sx={{ py: "24px" }}>
        {/*Main Blog Component*/}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <Box
            sx={{
              width: { md: "80%", xs: "90%" },
              margin: "auto",
              height: { sm: "415px", xs: "200px" },
            }}
          >
            <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
              <Image
                src={ImageConfig.IONIC_FRAMEWORK}
                alt={"Ionic Framework"}
                layout={"fill"}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              width: { md: "80%", xs: "90%" },
              margin: "auto",
            }}
          >
            <Typography
              sx={{ color: "#6941C6", fontSize: "14px", fontWeight: 600 }}
            >
              10 Sept 2022
            </Typography>

            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Typography
                component={"h2"}
                sx={{ color: "#101828", fontSize: "30px", fontWeight: 600 }}
              >
                UX review presentations
              </Typography>
              <a href="/" target={"_blank"}>
                <ArrowOutwardIcon color={"primary"} fontSize={"small"} />
              </a>
            </Box>
            <Typography
              component={"h2"}
              sx={{ color: "#475467", fontSize: "16px", fontWeight: 400 }}
            >
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
