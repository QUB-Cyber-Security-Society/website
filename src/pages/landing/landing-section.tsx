import { Box, Grid, Typography } from "@mui/material";
import React, { forwardRef } from "react";
import theme from "../../theme/theme";

const LandingSection = forwardRef<HTMLDivElement>(({ ...props }, ref) => {
  return (
    <Box
      ref={ref}
      {...props}
      sx={{
        backgroundColor: theme.palette.secondary.main,
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100vh" }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{ color: theme.palette.primary.main }}
        >
          Welcome to My Website
        </Typography>
        <Typography
          variant="h5"
          component="p"
          sx={{ color: theme.palette.primary.main }}
        >
          This is a simple landing section.
        </Typography>
      </Grid>
    </Box>
  );
});

export default LandingSection;
