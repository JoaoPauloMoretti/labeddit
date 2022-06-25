import { Card, CardActions, styled } from "@material-ui/core";

export const CardComent = styled(Card)({
    display: 'flex',
    flexDirection: 'column',
    width: '40vw',
    height: '20vh',
    margin: 'auto',
    marginBottom: '16px',
    marginTop: '16px',
    position: 'relative'


})

export const CardIcons = styled(CardActions)({
    display: 'flex',
    width: '15%',
    height: '10%',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: '0',
})