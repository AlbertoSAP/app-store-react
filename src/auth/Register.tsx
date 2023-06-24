import React, { useState, useEffect } from "react";
import fondo from "../fondoPaisaje.jpg";
import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { authCallEndPoint } from "../services/auth";
import { IRegister } from "../interface/IRegister";
import "./auth.css";

export const Register = () => {
  const { createAccount } = authCallEndPoint();

  const initialStateRegisterInfo:IRegister = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
  }

  const title: string = "Bienvenido a App Store NI";

  //  state for inputs
  const [registerInfo, setRegisterInfo] = useState<IRegister>(initialStateRegisterInfo);
  // dispatch start
  const [isReadyLogin, setIsReadyLogin] = useState<boolean>(false);

  const onchangeRegister = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const { name, value } = event.target;

    setRegisterInfo({ ...registerInfo, [name]: value });
  };

  useEffect(() => {
    if (isReadyLogin) {
      const handlerRegister = async () => {
        try {
          await createAccount(registerInfo);
        } catch (error) {
          setIsReadyLogin(false);
        }
      };
      handlerRegister();
    }
    setIsReadyLogin(false);
  }, [isReadyLogin, createAccount, registerInfo]);

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
              height: "auto",
              marginRight: "10px",
              marginLeft: "10px",
            }}
          >
            <Typography
              style={{ textAlign: "center" }}
              component="h1"
              variant="h5"
            >
              Crear Cuenta
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
              id="firstName"
              label="Primer Nombre"
              name="firstName"
              autoComplete="firstName"
              autoFocus
              onChange={onchangeRegister}
              value={registerInfo.firstName}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Primer Apellido"
              name="lastName"
              autoComplete="lastName"
              autoFocus
              onChange={onchangeRegister}
              value={registerInfo.lastName}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo electronico"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={onchangeRegister}
              value={registerInfo.email}
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
              onChange={onchangeRegister}
              value={registerInfo.password}
            />
            <Stack
              direction="row"
              spacing={2}
              sx={{ justifyContent: "center" }}
            >
              <Button
                onClick={() => setIsReadyLogin(true)}
                variant="contained"
                color="info"
              >
                Crear
              </Button>
            </Stack>
            <Stack
              direction="row"
              spacing={4}
              sx={{ justifyContent: "center", marginTop: "4px" }}
            >
            </Stack>
          </Paper>
        </Box>
      </div>
    </>
  );
};
