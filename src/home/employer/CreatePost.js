import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { createPostApi } from '../homeApi'
import messages from '../../auth/messages'
// import messages from '../messages'
// import apiUrl from '../../apiConfig'

class CreatePost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userToken:this.props.user.token,
      userId:this.props.user.id.$oid,
      jobTitle: '',
      jobDescription: ''
    }
  }

  //handle form change
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  //create post event handle
  onCreatePost = event => {
    event.preventDefault()
    const {flash, history} = this.props
    createPostApi(this.state)
      .then(res => res.json())
      .then(() => flash(messages.createPostSuccess, 'flash-success'))
      .then(() => history.push('/home/my-job-posts'))
      .catch(console.error)
  }





  render () {
    //map the array retrieved by api call in a JobPost array
    const { jobTitle, jobDescription } = this.state

    const createPostHtml = (
      <React.Fragment>

        <form onSubmit={this.onCreatePost}>
          <div className="edit-box">
            <input
              required
              type="text"
              name="jobTitle"
              value={jobTitle}
              placeholder="What is the title of the position? i.e Senior Software Engineer"
              onChange={this.handleChange}
            />
            <textarea
              required
              type="text"
              name="jobDescription"
              value={jobDescription}
              placeholder="What is the job description? "
              onChange={this.handleChange}
            ></textarea>
            <input type="submit" value="Create Job Post"/>
          </div>

        </form>
      </React.Fragment>
    )

    return (
      <div>
        {createPostHtml}
      </div>
    )
  }
}

export default withRouter(CreatePost)
