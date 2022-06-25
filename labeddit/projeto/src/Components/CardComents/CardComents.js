import React, { useEffect, useState } from 'react'
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Card } from '@material-ui/core';
import { CardComent, CardIcons } from './styledMaterial';
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { createVoteComment, changeVoteComment, deleteVoteComment, getComents } from '../../services/coments';
import { BASE_URL } from '../../constants/urls';
import { useParams } from 'react-router-dom';
import { voteDownIcon, voteUpIcon } from '../../services/votes';
import { convertDate } from '../../services/convertDates';

const CardComents = (props) => {

    const params = useParams()

    return (
        <CardComent>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" >
              R
            </Avatar>
          }
          title={props.coment.username}
          subheader={convertDate(props.coment.createdAt)}
        />
        <CardMedia
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
               {props.coment.body}
          </Typography>
        </CardContent>
        <CardIcons>
          <IconButton onClick={() => voteUpIcon(`${BASE_URL}/comments/${props.coment.id}/votes`, props.data, props.coment.userVote, params.postId)}>
            <ArrowUpward color={props.coment.userVote === 1 ? 'primary' : 'disabled'}/>
          </IconButton>

         <span>{props.coment.voteSum}</span>

          <IconButton onClick={() => voteDownIcon(`${BASE_URL}/comments/${props.coment.id}/votes`, props.data, props.coment.userVote, params.postId)}>
            <ArrowDownward color={props.coment.userVote === -1 ? 'secondary' : 'disabled'}/>
          </IconButton>
          
        </CardIcons>
      </CardComent>
    )

}

export default CardComents