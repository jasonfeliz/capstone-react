import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { getJobPostsApi } from '../homeApi'
import JobPost  from '../JobPost'
// import messages from '../messages'
// import apiUrl from '../../apiConfig'

class GetJobs extends Component {
  constructor(props){
    super(props)
    this.state = {
      job_posts: []
    }
  }

  componentDidMount(){
    const { token } = this.props.user
    getJobPostsApi(token)
      .then(res => res.json())
      .then(res => {
        this.setState({
          job_posts: res.job_posts
        })
      })
      .catch(console.error)
  }
  render () {
    const { user, flash } = this.props


    const JobPosts = this.state.job_posts.map(function(element,index){
      return (
        <JobPost key={index} data={element} user={user} flash={flash}/>
      )
    })
    return (
      <div>
        {JobPosts}
      </div>
    )
  }
}

export default GetJobs
