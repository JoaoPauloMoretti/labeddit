import { changeVoteComment, createVoteComment, deleteVoteComment } from "./coments"
import { changeVotePost, createVotePost, deleteVotePost } from "./posts"

export const voteUpIcon = (url, setData, userVote, id) => {
    if(id){
        if(userVote === null){
            createVoteComment(url, 1, setData, id)
        }
        else if(userVote === -1){
            changeVoteComment(url, 1, setData, id)
        }
        else if(userVote === 1){
            deleteVoteComment(url, setData, id)
        }
    }else {
        if(userVote === null){
            createVotePost(url, 1, setData)
          }
        else if(userVote === -1){
            changeVotePost(url, 1, setData)
          }
        else if(userVote === 1){
            deleteVotePost(url, setData)
          }
    }
  }

export  const voteDownIcon = (url, setData, userVote, id) => {
    if(id){
        if(userVote === null){
            createVoteComment(url, -1, setData, id)
        }
        else if(userVote === 1){
            changeVoteComment(url, -1, setData, id)
        }
        else if(userVote === -1){
            deleteVoteComment(url, setData, id)
        }
    }else {
        if(userVote === null){
            createVotePost(url, -1, setData)
          }
          else if(userVote === 1){
            changeVotePost(url, -1, setData)
          }
          else if(userVote === -1){
            deleteVotePost(url, setData)
          }
    }

  }