import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material";
import theme from "../theme/theme";
import { Section } from "../App";

export type NavBarProps = {
  scrollToRef: (section: Section) => void;
};

const NavBar = ({ scrollToRef }: NavBarProps) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: theme.palette.secondary.main,
        eight: "60px",
        marginBottom: "60px",
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          QUB Cyber Security Society
        </Typography>
        <Grid
          container
          justifyContent="space-between"
          alignItems="right"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Button color="inherit" onClick={() => scrollToRef("landing")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => scrollToRef("events")}>
            Events
          </Button>
          <Button color="inherit" onClick={() => scrollToRef("committee")}>
            Committee
          </Button>
          <Button color="inherit" onClick={() => scrollToRef("socials")}>
            Socials
          </Button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
