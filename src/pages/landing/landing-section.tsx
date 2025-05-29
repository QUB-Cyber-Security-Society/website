import { Box, Button, Grid, Typography } from "@mui/material";
import React, { forwardRef, useEffect, useState } from "react";
import theme from "../../theme/theme";
import { useHackerText } from "../../hooks/use-hacker-text";

const LandingSection = forwardRef<HTMLDivElement>(({ ...props }, ref) => {
  const { text, hackText } = useHackerText();
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    hackText();
    setTimeout(() => {
      setSlideIn(true);
    }, (1000 / 30) * (text.length + 1));
  }, []);

  return (
    <Box
      ref={ref}
      {...props}
      sx={{
        overflowX: "hidden",
        backgroundColor: theme.palette.secondary.main,
        height: { xs: "50vh", md: "100vh" },
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
        marginBottom: "30px",
      }}
    >
      <Grid
        container
        alignItems="center"
        sx={{
          height: "100%",
        }}
        columns={2}
      >
        <Box maxWidth={"600px"}>
          <Typography
            variant="h2"
            component="h1"
            sx={{ color: theme.palette.primary.main, padding: "30px" }}
          >
            {text}
          </Typography>
          <Box
            sx={{
              display: "flex",
              marginTop: "20px",
              paddingLeft: "5%",
            }}
          >
            <Button>
                <Typography
                variant="h6"
                component="span"
                sx={{
                  color: "white",
                  backgroundColor: theme.palette.primary.main,
                  padding: "10px 20px",
                  borderRadius: "5px",
                  transform: slideIn ? "translateX(0)" : "translateX(-100%)",
                  opacity: slideIn ? 1 : 0,
                  transition: "transform 0.8s ease, opacity 0.8s ease",
                  '&:hover': {
                  transform: "scale(1.05)",
                  transition: "transform 0.3s ease",
                  },
                }}
                >
                Join Us
                </Typography>
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: theme.palette.primary.main,
            flexGrow: 1,
            height: "100%",
            transform: slideIn ? "translateX(0)" : "translateX(100%)",
            opacity: slideIn ? 1 : 0,
            transition: "transform 0.8s ease, opacity 0.8s ease",
            display: { xs: "none", md: "flex" },
          }}
        >
          <Typography
            variant="h6"
            component="h2"
            sx={{
              color: theme.palette.secondary.main,
              padding: "60px",
            }}
          >
            TODO: PUT AN IMAGE HERE
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
});

export default LandingSection;
