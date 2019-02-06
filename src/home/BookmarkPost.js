import React, { Component } from 'react'
import { Route, Link, withRouter } from 'react-router-dom'
import BookmarkJob from './BookmarkJob'

import { bookmarkApi, getJobSeekerApi, removeBookmarkApi } from './homeApi'
import messages from '../auth/messages'


class BookmarkPost extends Component {
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
    const bookmarkId = event.target.id
    removeBookmarkApi(bookmarkId,this.state.userToken)
      .then(() => flash(messages.removeBookmarkSuccess, 'flash-success'))
      .then(action)
      .catch(console.error)
  }

  render(){
    const removeBookmark = (
      <React.Fragment>
        <p id = {this.props.data.id.$oid} onClick={this.onRemove} className="remove-btn">Remove Bookmark</p>
      </React.Fragment>
    )
    return (
      <li>
        <h3>{ this.props.data.job_post.job_title}</h3>
        <p>{ this.props.data.job_post.job_description}</p>
        {removeBookmark}
      </li>
    )
  }

}

export default withRouter(BookmarkPost)
