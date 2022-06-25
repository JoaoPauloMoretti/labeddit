import React from 'react'
import { BASE_URL } from '../../constants/urls'
import useForm from '../../hooks/useForm'
import { register } from '../../services/users'
import { Avatar, Button, Container, Grid, TextField, Typography } from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { goToLogin} from '../../Route/coordinator'
import { useHistory } from 'react-router-dom';
import useUnProtectedPage from '../../hooks/useUnProtectedPage';
import { ContainerRegisterPage } from './styledMaterial';

const RegisterPage = () => {
    useUnProtectedPage()

    const {form, onChange} = useForm({username: "", email: "", password: ""})
    const history = useHistory()

    const onSubmit = (event) => {
        event.preventDefault()
        register(`${BASE_URL}/users/signup`, form, history)
    }

    return (
    <ContainerRegisterPage component="main" maxWidth="xs">
            <div>
                <Avatar >
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Cadastre-se
                </Typography>

                <form onSubmit={onSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        type="text"
                        name="username"
                        autoFocus
                        value={form.username}
                        onChange={onChange}
                    />
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
                        Cadastrar
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Button variant="text" color="primary" onClick={() => goToLogin(history)}>
                                {"Já tem conta? Entre em sua conta!"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>

            </div>
    </ContainerRegisterPage>
    )

}

export default RegisterPage
