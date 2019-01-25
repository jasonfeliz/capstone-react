import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { getJobSeekerApi, editProfileApi} from '../homeApi'
import messages from '../../auth/messages'
// import apiUrl from '../../apiConfig'

class EditProfile extends Component {
  constructor(props){
    super(props)
    this.state = {
      userId: this.props.user.id.$oid,
      userToken: this.props.user.token,
      id: '',
      aboutMe: '',
      skills: [],
      jobTitle: '',
      location: '',
      resumeLink: '',
      githubLink: '',
      linkedinLink: '',
      codewarsUsername: '',
      codewarsApiKey: ''
    }
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  componentDidMount(){
    getJobSeekerApi(this.state)
      .then(res => res.json())
      .then(res => {
        const {id,about_me,job_title,location,github_link,linkedin_link,code_wars_username,code_wars_api_key} = res.job_seekers[0]
        this.setState({
          aboutMe: about_me,
          id: id.$oid,
          jobTitle: job_title,
          location: location,
          githubLink: github_link,
          linkedinLink: linkedin_link,
          codewarsUsername: code_wars_username,
          codewarsApiKey: code_wars_api_key
        })
      })
  }

  onEditProfile = event => {
    event.preventDefault()
    const { flash, history, user } = this.props
    editProfileApi(this.state)
      .then(res => res.json())
      .then(() => flash(messages.editProfileSuccess, 'flash-success'))
      .catch(() => flash(messages.signInFailure, 'flash-error'))
  }

  render () {
    const { user } = this.props
    const { userId, aboutMe, skills, jobTitle, location, githubLink, linkedinLink,codewarsUsername, codewarsApiKey, companyName, companyDescription, companyLink } = this.state
    const jobSeekerProfile = (
      <React.Fragment>
        <form onSubmit={this.onEditProfile}>
          <div className="edit-box">
            <textarea
              required
              type="text"
              name="aboutMe"
              value={aboutMe}
              placeholder="Write a short description about yourself"
              onChange={this.handleChange}
            ></textarea>
            <input
              type="text"
              name="skills"
              value={skills}
              placeholder="List some of your skills"
              onChange={this.handleChange}
            />
            <input
              required
              type="text"
              name="jobTitle"
              value={jobTitle}
              placeholder="Enter your job title or desired position you're looking for i.e Software Engineer"
              onChange={this.handleChange}
            />
            <input
              required
              type="text"
              name="location"
              value={location}
              placeholder="Location"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="githubLink"
              value={githubLink}
              placeholder="Your github link"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="linkedinLink"
              value={linkedinLink}
              placeholder="Your LinkedIn Link"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="codewarsUsername"
              value={codewarsUsername}
              placeholder="Enter Your CodeWars.com Username"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="codewarsApiKey"
              value={codewarsApiKey}
              placeholder="Enter your CodeWars.com API Key -- Check your account settings"
              onChange={this.handleChange}
            />
            <input type="submit" value="Edit Profile" />
          </div>

        </form>
      </React.Fragment>
    )
    return (
      <div>
        {jobSeekerProfile}
      </div>
    )
  }
}

export default EditProfile
