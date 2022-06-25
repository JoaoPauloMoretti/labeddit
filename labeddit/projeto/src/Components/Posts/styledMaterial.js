import { Card, CardActions, styled } from "@material-ui/core";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";



export const CardPost = styled(Card)({
    display: 'flex',
    flexDirection: 'column',
    width: '40vw',
    height: '25vh',
    margin: 'auto',
    marginBottom: '16px',
    marginTop: '16px',
    position: 'relative'


})

export const CardIcons = styled(CardActions)({
    display: 'flex',
    width: '20%',
    height: '65%',
    justifyContent: 'space-between'
    
})

export const ArrowUp = styled(ArrowUpward)({
   
})

export const ArrowDown = styled(ArrowDownward)({
    
})