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
import { useEffect, useState } from "react";
import { ILogin } from "../interface/ILogin";
import { authCallEndPoint } from "../services/auth";

export const Login = () => {
  const { login } = authCallEndPoint()
  const title: string = "Bienvenido a App Store NI";

 const initialStateLoginInfo:ILogin = {
  email:'alberto83980654@gmail.com',
  password:'81887782asap'
 }

//  state for inputs 
const [loginInfo, setLoginInfo] = useState<ILogin>(initialStateLoginInfo)
// dispatch start 
const [isReadyLogin, setIsReadyLogin] = useState<boolean>(false)

const onchangeLoginInfo = (event:React.ChangeEvent<HTMLInputElement>) =>{
  
   event.preventDefault()

   const {name,value} = event.target

   setLoginInfo(
    {...loginInfo,
      [name]:value
    }
   )
}

useEffect(() => {
  if (isReadyLogin) {
    const handlerLogin = async () => {
      try {
        await login(loginInfo);
      } catch (error) {
        setIsReadyLogin(false);
      }
    };
    handlerLogin();
  }
  setIsReadyLogin(false);
}, [isReadyLogin, login, loginInfo]);


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
              onChange={ onchangeLoginInfo }
              value={loginInfo.email}
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
              onChange={ onchangeLoginInfo }
              value={loginInfo.password}
            />
            <Stack
              direction="row"
              spacing={2}
              sx={{ justifyContent: "center" }}
            >
              <Button onClick={ () => setIsReadyLogin(true)} variant="contained" color="info">
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
