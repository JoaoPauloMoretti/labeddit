import { useLayoutEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { goToLogin } from "../Route/coordinator"


const useProtectedPage = () => {
    const history = useHistory()

    useLayoutEffect(() => {
        const token = window.localStorage.getItem('token')
        if(!token){
            goToLogin(history)
        }
    },)
}

export default useProtectedPage