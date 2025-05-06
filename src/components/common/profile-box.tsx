import { Box, Typography } from "@mui/material";
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type ProfileBoxProps = {
  name: string;
  position: string;
  imageUrl: string;
  email?: string;
  linkedIn?: string;
  github?: string;
};

const ProfileBox = ({ name, position, imageUrl, email, linkedIn, github }: ProfileBoxProps) => {
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
        {email && (
          <EmailTwoToneIcon
            onClick={() => window.open(`mailto:${email}`)}
            sx={{
              cursor: "pointer",
              fontSize: "24px",
              marginTop: "8px",
            }}
          />
        )}
        {linkedIn && (
          <Typography variant="body2" color="textSecondary">
            <a href={linkedIn} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
              LinkedIn
            </a>
          </Typography>
        )}
        {github && (
          <FontAwesomeIcon icon="fa-brands fa-github" />
        )}
      </Box>
    </Box>
  );
};

export default ProfileBox;
