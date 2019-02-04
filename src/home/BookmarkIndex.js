import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { allBookmarksApi } from './homeApi'
import BookmarkPost  from './BookmarkPost'
// import messages from '../messages'
// import apiUrl from '../../apiConfig'

class GetBookmarks extends Component {
  constructor(props){
    super(props)
    this.state = {
      bookmarks: []
    }
  }

  handler = () => (
    allBookmarksApi(this.props.user)
      .then(res => res.json())
      .then(res => {
        this.setState({
          bookmarks: res.bookmarks
        })
      })
      .catch(console.error)
  )

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
    const handler = this.handler
    const BookmarkPosts = this.state.bookmarks.map(function(element,index){
      return (
        <BookmarkPost key={index} data={element} user={user} flash={flash} action={handler}/>
      )
    })
    return (
      <div>
        {BookmarkPosts}
      </div>
    )
  }
}

export default withRouter(GetBookmarks)
