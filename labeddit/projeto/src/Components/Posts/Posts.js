import React from "react"
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { ArrowDown, ArrowUp, CardIcons, CardPost } from "./styledMaterial";
import { goToDetails } from "../../Route/coordinator";
import { useHistory } from "react-router-dom";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { CardComent, ContainerInteractions } from "./styled";
import { changeVotePost, createVotePost, deleteVotePost } from "../../services/posts";
import { BASE_URL } from "../../constants/urls";
import { voteDownIcon, voteUpIcon } from "../../services/votes";
import { convertDate } from "../../services/convertDates";

const Posts = (props) => {

  const history = useHistory()

    return(
        <CardPost>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" >
              R
            </Avatar>
          }
          title={props.posts.username}
          subheader={convertDate(props.posts.createdAt)}
        />
        <CardMedia
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
                {props.posts.body}
          </Typography>
        </CardContent>
        <ContainerInteractions>
          <CardIcons>
            <IconButton onClick={() => voteUpIcon(`${BASE_URL}/posts/${props.posts.id}/votes`, props.data, props.posts.userVote)}>
              <ArrowUp color={props.posts.userVote === 1 ? 'primary' : 'disabled'}/>
            </IconButton>

            <span>{props.posts.voteSum}</span>

            <IconButton onClick={() => voteDownIcon(`${BASE_URL}/posts/${props.posts.id}/votes`, props.data, props.posts.userVote)}>
              <ArrowDown color={props.posts.userVote === -1 ? 'secondary' : 'disabled'}/>
            </IconButton>
          
          
          </CardIcons>

          <CardComent>

          <div onClick={() => goToDetails(history, props.posts.id)}> {props.posts.commentCount ? <p> {props.posts.commentCount} comentários </p> : <p> 0 comentários </p> }</div>

          </CardComent>
        </ContainerInteractions>
      </CardPost>
    )

}

export default Posts 