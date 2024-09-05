import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Box, IconButton } from "@mui/material";

const ScrollDownArrow: React.FC = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
      }}
    >
      <IconButton onClick={scrollToContent} aria-label="Scroll down">
        <ArrowDownwardIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default ScrollDownArrow;
