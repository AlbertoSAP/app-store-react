import {
  Box,
  TextField,
  Typography,
  Paper,
  Button,
  Stack,
  Link,
} from "@mui/material";
import "../App.css";
import "./auth.css";
import fondo from "../fondoPaisaje.jpg";

export const Login = () => {
  const title: string = "Bienvenido a App Store NI";
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundImage: `url(${fondo})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <img src={fondo} className="App-logo" alt="logo" /> */}
        <Box
          sx={{
            width: "30rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Paper
            elevation={8}
            sx={{
              paddingTop: "20px",
              paddingBottom: "20px",
              paddingLeft: "20px",
              paddingRight: "20px",
              height: "20rem",
              marginRight: "10px",
              marginLeft: "10px",
            }}
          >
            <Typography
              style={{ textAlign: "center" }}
              component="h1"
              variant="h5"
            >
              Login
            </Typography>

            <Typography
              style={{ textAlign: "center", marginTop: "10px" }}
              variant="body1"
            >
              {title}
            </Typography>

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo electronico"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Stack
              direction="row"
              spacing={2}
              sx={{ justifyContent: "center" }}
            >
              <Button variant="contained" color="info">
                Login
              </Button>
            </Stack>
            <Stack
              direction="row"
              spacing={4}
              sx={{ justifyContent: "center", marginTop:'4px' }}
            >
              <Typography variant="subtitle2">
              ¿Aun no posees una cuenta? 
                <Link sx={{paddingLeft:'3px'}} underline="always">
                ¡Registrate
                </Link> ahora!
              </Typography>
            </Stack>
          </Paper>
        </Box>
      </div>
    </>
  );
};
