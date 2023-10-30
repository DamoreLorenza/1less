import { Component } from "react";

import CommentList from "./CommentList";
import SingleComment from "./SingleComment";
import AddComment from "./AddComment";



class getComment extends Component {

state={comments: [
],
  }

takeDate=()=>{
fetch('https://striveschool-api.herokuapp.com/api/comments', {
   
    body: JSON.stringify(this.state.comment),
    headers: {
      'Content-type': 'application/json',
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNjQ4MWY2ZTNkZDAwMTQ5NWU0NTIiLCJpYXQiOjE2OTg2Nzg5NzksImV4cCI6MTY5OTg4ODU3OX0.1M2oDf_8BwI3Ok8pYV6syOgI8dmk47ivHQGQby8nVow",
    },
  })
  .then ((res)=>{if (res.ok){return res.json()} else {throw new Error("erroreee")}})
  .then((data)=>{
    this.setState({comment: data})
  })
  .catch((err)=>{console.log("errore", err)})

}
componentDidMount(){
    this.takeDate()
}
componentDidUpdate(prevProps,prevState){
    if(prevProps.comment !== this.props.comment){
        this.takeDate()
    }
}
    render(){
        return (
 <>
       <CommentList/>
       <AddComment/>
</>
        )
    }
}


export default getComment