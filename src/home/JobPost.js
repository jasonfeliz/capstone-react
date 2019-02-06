import React, { Component } from 'react'
import { Route, Link, withRouter } from 'react-router-dom'
import BookmarkJob from './BookmarkJob'

import { bookmarkApi, getJobSeekerApi, removeJobApi } from './homeApi'
import messages from '../auth/messages'

class JobPost extends Component {
  constructor(props){
    super(props)
    this.state = {
      userId: this.props.user.id.$oid,
      userToken: this.props.user.token,
      jobSeekerId: ''
    }
  }

  onRemove = event => {
    const { flash, history, action } = this.props
    const postId = event.target.id
    removeJobApi(postId,this.state.userToken)
      .then(() => flash(messages.removeJobSuccess, 'flash-success'))
      .then(action)
      .catch(console.error)
  }

  onBookmark = event => {
    const postId = event.target.id
    const { flash } = this.props
    getJobSeekerApi(this.state)
      .then(res => res.json())
      .then(res => {
        const { id } = res.job_seekers[0]
        this.setState({
          jobSeekerId: id.$oid
        })
      })
      .then(() => {
        bookmarkApi(postId,this.state.jobSeekerId)
          .then(res => res.json())
          .then(() => flash(messages.bookmarkSuccess, 'flash-success'))
          .catch(console.error)
      })
  }
  render(){
    const bookmarkJob = (
      <React.Fragment>
        <p id = {this.props.data.id.$oid} onClick={this.onBookmark} className="bookmark-btn">Bookmark</p>
      </React.Fragment>
    )
    const jobAction = (
      <React.Fragment>
        <p id = {this.props.data.id.$oid} onClick={this.onRemove} className="remove-btn">Remove Job Post</p>
        <p><Link to={{
          pathname: '/home/edit-job-post',
          state: {
            job_post_id: this.props.data.id.$oid,
            job_title: this.props.data.job_title,
            job_description: this.props.data.job_description
          }
        }}>Update Job Post</Link> </p>
      </React.Fragment>
    )

    return (
      <li>

        <Link to={{
          pathname:'/home/job-post',
          state: {
            data: this.props.data
          }
        }} ><h3>{ this.props.data.job_title}</h3></Link>
        <p>{ this.props.data.job_description }</p>
        {this.props.data.user.user_id.$oid === this.props.user.id.$oid ? jobAction : bookmarkJob}
      </li>
    )
  }

}

export default withRouter(JobPost)
