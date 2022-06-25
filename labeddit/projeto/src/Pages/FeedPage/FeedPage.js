import React, { useEffect, useState } from "react"
import { BASE_URL } from "../../constants/urls"
import useProtectedPage from "../../hooks/useProtectedPage"
import Posts from "../../Components/Posts/Posts"
import { Button, LinearProgress, TextField } from "@material-ui/core"
import useForm from "../../hooks/useForm"
import { createPost, getPosts } from "../../services/posts"
import Header from "../../Components/Header/Header"
import { ContainerPosts, FormFeed } from "./styled"


const FeedPage = () => {
    useProtectedPage()

    const [data, setData] = useState([])
    const { form, onChange, clear } = useForm({ title: "", body: "" })
    const [loading, setLoading] = useState(false)
 
    const feedPosts = () => {
        getPosts(`${BASE_URL}/posts`, setData, setLoading)
    }
    console.log(data)

    const onSubmit = (event) => {
        event.preventDefault()
        createPost(`${BASE_URL}/posts`, form, setData, clear, setLoading)
    }

    useEffect(() => {
        feedPosts()
    },[])

    return(
        <div>

            <Header />
            
            <ContainerPosts>

            <FormFeed onSubmit={onSubmit}>
                <TextField          
                    margin="dense"
                    label="Titulo do post"
                    name="title"
                    value={form.title}
                    onChange={onChange}
                    variant="outlined"
                    fullWidth
                    required
                />

                <TextField
                    label="O que está acontecendo?"
                    name="body"
                    value={form.body}
                    onChange={onChange}
                    variant="outlined"
                    fullWidth
                    required
                />

                <Button variant="contained" color="primary" type="submit"> Publicar </Button>
            </FormFeed>

            {loading ? <div> <LinearProgress /> </div> : data && data.map((item) => {
                return <Posts key={item.id} posts={item} data={setData}/>
            })}

            </ContainerPosts>
        </div>
    )
}

export default FeedPage