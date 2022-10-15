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
        maxWidth: "1350px",
        width: {
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
