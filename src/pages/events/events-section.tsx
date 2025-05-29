import { Box, Grid, Typography } from "@mui/material";
import EventBox from "../../components/common/event-box";

export type EventsSectionProps = {
  ref?: React.Ref<HTMLDivElement>;
}

const EventsSection = ({ ref, ...props }: EventsSectionProps) => {
  return (
    <Box
      ref={ref}
      {...props}
      sx={{
        backgroundColor: "#f0f0f0",
        padding: "20px",
        textAlign: "center",
        scrollMarginTop: "80px",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Upcoming Events
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: "20px" }}
      >
        <EventBox
          title="Cyber Security Workshop"
          description="Join us for an interactive workshop on the latest trends in cyber security."
          date="2023-10-15"
          time="10:00 AM - 2:00 PM"
          location="Room 101, Main Building"
        />
        <EventBox
          title="Guest Lecture: Cyber Threats"
          description="A guest lecture by an industry expert on the current cyber threats."
          date="2023-10-20"
          time="1:00 PM - 3:00 PM"
          location="Room 202, Main Building"
        />
        <EventBox
          title="Capture the Flag Competition"
          description="Participate in our annual CTF competition and win exciting prizes!"
          date="2023-11-05"
          time="9:00 AM - 5:00 PM"
          location="Auditorium, Main Building"
        />
      </Grid>
    </Box>
  );
};

export default EventsSection;
