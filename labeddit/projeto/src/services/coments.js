import axios from "axios"
import { BASE_URL } from "../constants/urls"

export const getComents = (url, setData, setLoading) => {
    if(setLoading){
        setLoading(true)
    }
    axios.get(url, {
        headers: {
            Authorization: window.localStorage.getItem("token")
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


export const createComent = (url, body, clear, setData, setLoading) => {
    axios.post(url, body, {
        headers: {
            Authorization: window.localStorage.getItem("token")
        }
    })
    .then(() => {
        getComents(url, setData, setLoading)
        clear()
    })
    .catch((error) => {
        console.log(error)
    })
    

}

export const detailsPost = (data, idPost) => {
    const postId = data.find(item => {
        return idPost === item.id
    })

    return postId
}

export const createVoteComment = (url, direction, setData, id) => {
    
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
        getComents(`${BASE_URL}/posts/${id}/comments`, setData)
    })
    .catch((error) => {
        console.log(error)
    })

}

export const changeVoteComment = (url, direction, setData,  id) => {
    
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
        getComents(`${BASE_URL}/posts/${id}/comments`, setData && setData)
    })
    .catch((error) => {
        console.log(error)
    })

}

export const deleteVoteComment = (url, setData, id) => {

    axios.delete(url, {
        headers: {
            Authorization: window.localStorage.getItem("token")
        }
    })
    .then((response) => {
        console.log(response)
        getComents(`${BASE_URL}/posts/${id}/comments`, setData && setData)
    })
    .catch((error) => {
        console.log(error)
    })

}
