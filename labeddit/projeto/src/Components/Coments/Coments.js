import React, { useEffect, useState } from 'react'
import { Button, LinearProgress, TextField } from "@material-ui/core"
import useForm from '../../hooks/useForm'
import { createComent, getComents } from '../../services/coments'
import { BASE_URL } from '../../constants/urls'
import CardComents from  '../CardComents/CardComents'
import { FormComent } from './styled'


const Coments = (props) => {

    const { form, onChange, clear } = useForm({body: "" })
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        coments()
    }, [])

    const coments = () => {
        getComents(`${BASE_URL}/posts/${props.id}/comments`, setData)
    }
    
    const onSubmit = (event) => {
        event.preventDefault()
        createComent(`${BASE_URL}/posts/${props.id}/comments`, form, clear, setData, setLoading)
    }



    return(
        <div>
            <FormComent onSubmit={onSubmit}>
                <TextField
                    label="Comente aqui"
                    name="body"
                    value={form.body}
                    onChange={onChange}
                    variant="outlined"
                />

                <Button variant="contained" color="primary" type="submit"> Publicar </Button>
            </FormComent>

            {loading ? <LinearProgress /> : data && data.map((item) => {
                return <CardComents key={item.id} coment={item} data={setData} />
            })}

    </div>
    )

}

export default Coments