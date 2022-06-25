import { Card, CardActions, styled } from "@material-ui/core";

export const CardComent = styled(Card)({
    display: 'flex',
    flexDirection: 'column',
    width: '50vw',
    height: '30vh',
    margin: 'auto',
    marginBottom: '10px',
    marginTop: '16px',
    position: 'relative'


})

export const CardIcons = styled(CardActions)({
    display: 'flex',
    width: '15%',
    height: '65%',
    justifyContent: 'space-between'
})