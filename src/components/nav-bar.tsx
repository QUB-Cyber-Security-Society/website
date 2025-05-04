import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material"

const NavBar = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: (theme) => theme.palette.primary.main }}>
            <Toolbar disableGutters>
                <Grid container justifyContent="space-between" alignItems="center">
                    <Button color="inherit" href="/">
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            MyApp
                        </Typography>
                    </Button>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar