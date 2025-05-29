import { Box } from "@mui/material";

export type SocialBoxProps = {
  link: string,
}

const SocialBox = ({ link }: SocialBoxProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRadius: 2,
        overflow: "hidden",
        marginBottom: 4,
        boxShadow: 2,
      }}
    >
      <iframe
        src={link}
        height="400"
        width="100%"
        allowFullScreen={true}
        sandbox="allow-scripts"
      ></iframe>
    </Box>
  );
};

export default SocialBox;
