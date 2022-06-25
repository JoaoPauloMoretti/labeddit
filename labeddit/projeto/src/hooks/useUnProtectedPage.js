import { useLayoutEffect } from "react"
import { useHistory } from "react-router-dom"
import { goToFeed } from "../Route/coordinator"


const useUnProtectedPage = () => {
    const history = useHistory()

    useLayoutEffect(() => {
        const token = window.localStorage.getItem('token')
        if(token){
            goToFeed(history)
        }
    })
}

export default useUnProtectedPage