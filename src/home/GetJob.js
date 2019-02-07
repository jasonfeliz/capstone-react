import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'


const ViewJobPost = props => {
  const JobPost = (
    <React.Fragment>
      <h4>{props.location.state.data.job_title}</h4>
      <p>{props.location.state.data.job_description}</p>
    </React.Fragment>
  )
  return (
    <div>
      {JobPost}
    </div>


  )
}


export default withRouter(ViewJobPost)
