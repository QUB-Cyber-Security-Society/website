import React, { forwardRef } from "react";
import theme from "../../theme/theme";
import { Box, Grid, Typography } from "@mui/material";
import SocialBox from "../../components/common/social-box";

const SocialsSection = forwardRef<HTMLDivElement>(({ ...props }, ref) => {
  return (
    <>
      <Box
        ref={ref}
        {...props}
        sx={{
          backgroundColor: theme.palette.background.default,
          padding: "20px",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Follow Us on Social Media
        </Typography>
      </Box>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: "20px" }}
      >
        <SocialBox />
        <SocialBox />
        <SocialBox />
      </Grid>
      <Box
        {...props}
        sx={{
          backgroundColor: theme.palette.secondary.main,
          padding: "40px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
      </Box>
    </>
  );
});

export default SocialsSection;
