import { Box } from "@mui/material";
import React, { forwardRef } from "react";

const EventsSection = forwardRef<HTMLDivElement>(({ ...props }, ref) => {
  return (
    <Box
      ref={ref}
      {...props}
      sx={{
        backgroundColor: "#f0f0f0",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h2>Events Section</h2>
      <p>This is the events section of the website.</p>
      <p>Here you can find information about upcoming events.</p>
      <p>Stay tuned for more updates!</p>
    </Box>
  );
});

export default EventsSection;
