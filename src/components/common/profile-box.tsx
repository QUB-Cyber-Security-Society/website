import { Box, Grid, Typography } from "@mui/material";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export type ProfileBoxProps = {
  name: string;
  position: string;
  imageUrl: string;
  email?: string;
  linkedIn?: string;
  github?: string;
};

const ProfileBox = ({
  name,
  position,
  imageUrl,
  email,
  linkedIn,
  github,
}: ProfileBoxProps) => {
  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        borderRadius: "16px",
        overflow: "hidden",
        width: "250px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        margin: "8px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#fff",
          padding: "40px 16px 16px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <img
          src={imageUrl}
          alt={name}
          style={{
            width: "150px",
            height: "auto",
            borderRadius: "50%",
            marginBottom: "16px",
          }}
        />
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body2">{position}</Typography>
        <Grid container spacing={2} sx={{ marginTop: "16px" }}>
          {email && (
            <EmailOutlinedIcon
              onClick={() => window.open(`mailto:${email}`)}
              sx={{
                cursor: "pointer",
                fontSize: "24px",
                marginTop: "8px",
              }}
            />
          )}
          {linkedIn && (
            <FontAwesomeIcon
              icon={faLinkedin}
              onClick={() => window.open(linkedIn)}
              style={{
                cursor: "pointer",
                fontSize: "24px",
                marginTop: "8px",
              }}
            />
          )}
          {github && (
            <FontAwesomeIcon
              icon={faGithub}
              onClick={() => window.open(github)}
              style={{
                cursor: "pointer",
                fontSize: "24px",
                marginTop: "8px",
              }}
            />
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProfileBox;
