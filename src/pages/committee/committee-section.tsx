import { Box, Typography } from "@mui/material";
import React, { forwardRef } from "react";
import theme from "../../theme/theme";
import ProfileBox from "../../components/common/profile-box";

const CommitteeSection = forwardRef<HTMLDivElement>(({ ...props }, ref) => {
  return (
    <>
      <Box
        ref={ref}
        {...props}
        sx={{
          backgroundColor: theme.palette.secondary.main,
          padding: "40px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Meet the Committee
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: "20px",
        }}
      >
        <ProfileBox
          name={"Caolan Maguire"}
          position={"President"}
          imageUrl={"https://placehold.jp/200x200.png"}
          email="test@email.com"
          linkedIn=""
          github=""
        />
        <ProfileBox
          name={"Priyal Gupta"}
          position={"Secretary"}
          imageUrl={"https://placehold.jp/200x200.png"}
        />
        <ProfileBox
          name={"Jake Turner"}
          position={"Treasurer"}
          imageUrl={"https://placehold.jp/200x200.png"}
          email="jturner23@qub.ac.uk"
          linkedIn="https://www.linkedin.com/in/jake-turner-045b6b266/"
          github="https://github.com/jake-t-dev"
        />
      </Box>
    </>
  );
});

export default CommitteeSection;
