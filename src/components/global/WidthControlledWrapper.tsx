import React, { ReactNode } from "react";
import { Box } from "@mui/material";

interface WidthControlledWrapperProps {
  children: ReactNode;
}

const WidthControlledWrapper: React.FC<WidthControlledWrapperProps> = ({
  children,
}) => {
  return (
    <Box
      sx={{
        maxWidth: "1536px",
        width: {
          xl: "95%",
          md: "85%",
          xs: "90%",
        },
        margin: "auto",
      }}
    >
      {children}
    </Box>
  );
};
export default WidthControlledWrapper;
