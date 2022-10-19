import React from "react";
import { Box } from "@mui/material";

interface DividerProps {}

const CustomDivider: React.FC<DividerProps> = () => {
  return (
    <Box
      sx={{
        height: "1px",
        backgroundColor: "#EAECF0",
      }}
    />
  );
};
export default CustomDivider;
