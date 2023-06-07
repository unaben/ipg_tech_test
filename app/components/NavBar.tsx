import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

const MenuAppBar = () => {
  const message = `Welcome to the weather app `;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ minHeight: "70px", bgcolor: "white" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, color: "black" }}
          >
            Weather App
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              // color="black"
            >
              <AccountCircle />
            </IconButton>
            <Typography
              // variant="p"
              component="div"
              sx={{ flexGrow: 1, color: "black" }}
            >
              {message}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default MenuAppBar;
