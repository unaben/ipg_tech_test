import { useState } from "react";
import {
  Container,
  Button,
  Grid,
  Paper,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Form } from "@remix-run/react";

const LoginComp = () => {
  const [showPassword, setShowPassword] = useState<Boolean>(false);

  const handlePasswordVisibilty = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          style={{ minHeight: "80vh" }}
        >
          <Paper elevation={2} sx={{ padding: 5 }}>
            <Form method="post">
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <TextField
                    type="text"
                    fullWidth
                    name="username"
                    label="Username"
                    placeholder="Enter username"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item>
                  <TextField
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    name="password"
                    label="Password"
                    placeholder="Password"
                    variant="outlined"
                    required
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handlePasswordVisibilty}
                            aria-label="toggle password"
                            edge="end"
                          >
                            {showPassword ? (
                              <VisibilityOffIcon />
                            ) : (
                              <VisibilityIcon />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item>
                  <Button type="submit" fullWidth variant="contained">
                    LogIn
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Paper>
        </Grid>
      </Container>
    </div>
  );
};
export default LoginComp;
