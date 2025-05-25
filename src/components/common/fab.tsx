import { Box, Typography } from "@mui/material";
import theme from "../../theme/theme";

const Fab = () => {
    return (
        <Box>
            <Box
                sx={{
                    position: "fixed",
                    bottom: 16,
                    right: 16,
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    backgroundColor: theme.palette.secondary.dark,
                    color: theme.palette.primary.main,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
                    cursor: "pointer",
                    "&:hover": {
                        transform: "scale(1.1)",
                        transition: "transform 0.2s ease-in-out",
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.secondary.dark,
                    },
                }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
                <Typography
                    variant="caption"
                    sx={{
                        position: "absolute",
                        fontSize: "24px",
                        fontWeight: "bold",
                    }}
                >
                    ↑
                </Typography>
            </Box>
        </Box>
    );
};

export default Fab;
