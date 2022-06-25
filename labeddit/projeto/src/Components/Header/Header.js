import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { logout } from '../../services/logout'
import { HeaderContainer, Invisible } from './styled'

const Header = () => {
    const history = useHistory()

    return(
        <HeaderContainer>
            <div>
            <Button variant='outlined' onClick={() => logout(history)}>Logout</Button>
            </div>
            <>
            <h2>Labeddit</h2>
            </>
            <Invisible>
                <p></p>
            </Invisible>
        </HeaderContainer>
    )
}

export default Header