import axios from "axios"
import { BASE_URL } from "../constants/urls"


export const getPosts = (url, setData, setLoading) => {
    if(setLoading){
        setLoading(true)
    }
    axios.get(url, {
        headers: {
            Authorization: window.localStorage.getItem('token')
        }
    })
    .then((response) => {
        setData(response.data)
        if(setLoading){
            setLoading(false)
        }
    })
    .catch((error) => {
        console.log(error)
    })

}


export const createPost = (url, body, setData, clear, setLoading) => {
    axios.post(url, body, {
        headers: {
            Authorization: window.localStorage.getItem("token")
        }
    })
    .then((response) => {
        console.log(response)
        getPosts(url, setData, setLoading)
        clear()
        
    })
    .catch((error) => {
        console.log(error)
    })
}

export const createVotePost = (url, direction, setData) => {
    
    const vote = {
        direction: direction
    }

    axios.post(url, vote, {
        headers: {
            Authorization: window.localStorage.getItem("token")
        }
    })
    .then((response) => {
        console.log(response)
        getPosts(`${BASE_URL}/posts`, setData)
    })
    .catch((error) => {
        console.log(error)
    })

}

export const changeVotePost = (url, direction, setData) => {
    
    const vote = {
        direction: direction
    }

    axios.put(url, vote, {
        headers: {
            Authorization: window.localStorage.getItem("token")
        }
    })
    .then((response) => {
        console.log(response)
        getPosts(`${BASE_URL}/posts`, setData && setData)
    })
    .catch((error) => {
        console.log(error)
    })

}

export const deleteVotePost = (url, setData) => {

    axios.delete(url, {
        headers: {
            Authorization: window.localStorage.getItem("token")
        }
    })
    .then((response) => {
        console.log(response)
        getPosts(`${BASE_URL}/posts`, setData && setData)
    })
    .catch((error) => {
        console.log(error)
    })

}
