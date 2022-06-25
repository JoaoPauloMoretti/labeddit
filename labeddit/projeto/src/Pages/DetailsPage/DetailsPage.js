import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/urls'
import { changeVotePost, createVotePost, deleteVotePost, getPosts } from '../../services/posts'
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Card, LinearProgress } from "@material-ui/core";
import Coments from '../../Components/Coments/Coments';
import { CardComent, CardIcons } from './styledMaterial';
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import Header from '../../Components/Header/Header';
import { ContainerComents, ContainerInteractions, Coment } from './styled';
import { detailsPost } from '../../services/coments';
import { voteDownIcon, voteUpIcon } from '../../services/votes';
import { convertDate } from '../../services/convertDates';

const DetailsPage = () => {

    const [data, setData] = useState([])
    const params = useParams()
    const [loading, setLoading] = useState(false)

    const post = detailsPost(data && data, params.postId)

    useEffect(() => {
        getPosts(`${BASE_URL}/posts`, setData, setLoading)
    }, [])

    return (
    <div>

        {loading && <LinearProgress/>}

        <Header />
        <ContainerComents>

            <CardComent>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" >
                            R
                        </Avatar>
                    }
                    title={post && post.username}
                    subheader={post && convertDate(post.createdAt)}
                />
                <CardMedia
                    image="/static/images/cards/paella.jpg"
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {post && post.body}
                    </Typography>
                </CardContent>
                <ContainerInteractions>
          <CardIcons>

            <IconButton onClick={() => voteUpIcon(`${BASE_URL}/posts/${params.postId}/votes`, setData, post && post.userVote)}>
              <ArrowUpward color={post && post.userVote === 1 ? 'primary' : 'disabled'}/>
            </IconButton>

            <span>{post && post.voteSum}</span>

            <IconButton onClick={() => voteDownIcon(`${BASE_URL}/posts/${params.postId}/votes`, setData, post && post.userVote)}>
              <ArrowDownward color={post && post.userVote === -1 ? 'secondary' : 'disabled'}/>
            </IconButton>
    
          </CardIcons>

          <Coment>

          <div> {post && post.commentCount ? <p> {post.commentCount} comentários </p> : <p> 0 comentários </p> }</div>
          </Coment>
        </ContainerInteractions>
            </CardComent>

            <Coments id={params.postId} data={data && data}/>

        </ContainerComents>
    </div>
    )
}

export default DetailsPage