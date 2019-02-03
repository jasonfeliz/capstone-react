import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { allBookmarksApi } from './homeApi'
import JobPost  from './JobPost'
// import messages from '../messages'
// import apiUrl from '../../apiConfig'

class GetBookmarks extends Component {
  constructor(props){
    super(props)
    this.state = {
      bookmarks: []
    }
  }

  componentDidMount(){
    const { user, token } = this.props.user
    allBookmarksApi(this.props.user)
      .then(res => res.json())
      .then(res => {
        this.setState({
          bookmarks: res.bookmarks
        })
      })
      .catch(console.error)
  }
  render () {
    const { user, flash } = this.props
    const JobPosts = this.state.bookmarks.map(function(element,index){
      return (
        <JobPost key={index} data={element.job_post} user={user} flash={flash}/>
      )
    })
    return (
      <div>
        {JobPosts}
      </div>
    )
  }
}

export default withRouter(GetBookmarks)
