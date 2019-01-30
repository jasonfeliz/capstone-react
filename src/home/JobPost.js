import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import BookmarkJob from './BookmarkJob'

import { bookmarkApi, getJobSeekerApi } from './homeApi'
import messages from '../auth/messages'
class JobPost extends Component {
  constructor(props){
    super(props)
    this.state = {
      userId: this.props.user.id.$oid,
      userToken: this.props.user.token,
      jobSeekerId: '',
    }
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
    return (
      <li>
        <h4>{ this.props.data.job_title}</h4>
        <p>{ this.props.data.job_description }</p>
        {this.props.data.user.user_id.$oid != this.props.user.id.$oid && bookmarkJob}
      </li>
    )
  }

}

export default JobPost
