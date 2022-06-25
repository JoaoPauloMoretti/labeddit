import { Avatar, Button, Container, Grid, Link, TextField, Typography } from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React from "react";
import { BASE_URL } from "../../constants/urls";
import useForm from "../../hooks/useForm"
import { login } from "../../services/users"
import { goToRegister } from "../../Route/coordinator"
import { useHistory } from "react-router-dom";
import useUnProtectedPage from "../../hooks/useUnProtectedPage";
import { ContainerLoginPage } from "./styledMaterial";


const LoginPage = () => {
    useUnProtectedPage()
  

    const {form, onChange} = useForm({email: "", password: ""})
    const history = useHistory()

    const onSubmit = (event) => {
      event.preventDefault()
      login(`${BASE_URL}/users/login`, form, history)
    }
    
    return (
    <ContainerLoginPage component="main" maxWidth="xs">
      <div>
        <Avatar >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
            Entrar
        </Typography>
        <form onSubmit={onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            autoFocus
            value={form.email}
            onChange={onChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            value={form.password}
            onChange={onChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Entrar
          </Button>
          <Grid container>
            <Grid item>
              <Button variant="text" color="primary" onClick={() => goToRegister(history)}>
                {"Não tem conta? Cadastre-se"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </ContainerLoginPage>
    )
}


export default LoginPage
