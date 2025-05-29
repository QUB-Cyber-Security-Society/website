import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import theme from "../../theme/theme";

const Fab = () => {
  const [showFab, setShowFab] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFab(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        width: 56,
        height: 56,
        borderRadius: "50%",
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.primary.main,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
        cursor: "pointer",
        opacity: showFab ? 1 : 0,
        transform: showFab ? "scale(1)" : "scale(0.8)",
        transition: "opacity 0.3s ease, transform 0.3s ease",
        pointerEvents: showFab ? "auto" : "none", // prevent interaction when hidden
        "&:hover": {
          transform: showFab ? "scale(1.1)" : "scale(0.8)", // apply hover only when visible
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.secondary.dark,
        },
      }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <Typography
        variant="caption"
        sx={{
          position: "absolute",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        ↑
      </Typography>
    </Box>
  );
};

export default Fab;
