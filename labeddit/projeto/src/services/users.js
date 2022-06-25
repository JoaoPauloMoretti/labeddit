import axios from 'axios'
import { goToFeed } from '../Route/coordinator'


export const login = (url, body, history) => {
    axios.post(url, body)
    .then((response) => {
        window.localStorage.setItem('token', response.data.token)
        goToFeed(history)
    })
    .catch((error) => {
        console.log(error)
    })
}

export const register = (url, body, history) => {
    axios.post(url, body)
    .then((response) => {
        window.localStorage.setItem('token', response.data.token)
        goToFeed(history)
    })
    .catch((error) => {
        console.log(error)
    })
}