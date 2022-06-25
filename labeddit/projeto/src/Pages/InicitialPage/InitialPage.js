import React from 'react'
import useUnProtectedPage from '../../hooks/useUnProtectedPage'
import { Back, Container, ContainerLogin, ContainerRegister } from './styled'
import { useHistory } from "react-router-dom";
import { goToLogin, goToRegister } from '../../Route/coordinator';
import { Button } from '@material-ui/core';

const InitialPage = () => {
    useUnProtectedPage()

    const history = useHistory()

    return (
        <Back>       
            <Container>
                <ContainerRegister onClick={()=> goToRegister(history)}>
                    <Button color='secondary' variant='contained'> Não tem conta </Button>
                </ContainerRegister>

                <ContainerLogin onClick={() => goToLogin(history)}>
                <Button color='primary' variant='contained'> Já tem conta </Button>
                </ContainerLogin>
            </Container>
        </Back>
    )
}

export default InitialPage