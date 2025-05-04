import { Box, Typography } from "@mui/material";
import theme from "../../theme/theme";

export type EventBoxProps = {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
};

const EventBox = ({
  title,
  description,
  date,
  time,
  location,
}: EventBoxProps) => {
  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        borderRadius: "16px",
        overflow: "hidden",
        width: "300px",
        textAlign: "left",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        margin: "8px",
      }}
    >
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: "#fff",
          padding: "16px",
        }}
      >
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">
          {date} | {time}
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: "#fff",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <Typography variant="body1">{description}</Typography>
        <Typography variant="body2">{location}</Typography>
      </Box>
    </Box>
  );
};

export default EventBox;
