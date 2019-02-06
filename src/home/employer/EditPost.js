import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { editPostApi } from '../homeApi'
import messages from '../../auth/messages'
// import messages from '../messages'
// import apiUrl from '../../apiConfig'

class EditPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userToken:this.props.user.token,
      userId:this.props.user.id.$oid,
      jobPostId: this.props.location.state.job_post_id,
      jobTitle: this.props.location.state.job_title,
      jobDescription: this.props.location.state.job_description
    }
  }

  //handle form change
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  //create post event handle
  onEditPost = event => {
    event.preventDefault()
    const {flash, history} = this.props
    editPostApi(this.state)
      .then(res => res.json())
      .then(() => flash(messages.editPostSuccess, 'flash-success'))
      .then(() => history.push('/home/my-job-posts'))
      .catch(console.error)
  }





  render () {
    //map the array retrieved by api call in a JobPost array
    const { jobTitle, jobDescription } = this.state

    const createPostHtml = (
      <React.Fragment>

        <form onSubmit={this.onEditPost}>
          <div className="edit-box">
            <input
              required
              type="text"
              name="jobTitle"
              value={jobTitle}
              placeholder="Title of the job"
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
            <input type="submit" value="Edit Job Post"/>
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

export default withRouter(EditPost)
