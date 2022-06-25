import axios from "axios"
import { useEffect, useState } from "react"

const useGetPosts = (url, inicialState) => {

    const [data, setData] = useState(inicialState)

    useEffect(() => {
    axios.get(url, {
        headers: {
            Authorization: window.localStorage.getItem('token')
        }
    })
    .then((response) => {
        setData(response.data)
    })
    .catch((error) => {
        console.log(error)
    })

}, [url])
    
return data

}

export default useGetPosts