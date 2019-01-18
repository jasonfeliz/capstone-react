import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// import { handleErrors, changePassword } from '../api'
// import messages from '../messages'
// import apiUrl from '../../apiConfig'

class CreateProfile extends Component {
  constructor (props) {
    super(props)
    const { user_type } = this.props.user
    if(user_type === 'job_seeker'){
      this.state = {
        userId: '',
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
    }else {
      this.state = {
        employer_id: '',
        companyName: '',
        companyDescription: '',
        companyLink: ''
      }
    }
  }


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onCreateProfile = event => {
    //write fetch api call request to create profile
    //last .then should history push to /home
  }

  render () {
    const { userId, aboutMe, skills, jobTitle, location, githubLink, linkedinLink,codewarsUsername, codewarsApiKey, companyName, companyDescription, companyLink } = this.state
    const { user_type } = this.props.user

    const jobSeekerProfile = (
      <React.Fragment>
        <form onSubmit={this.onCreateProfile}>
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
        </form>
      </React.Fragment>
    )


    const employerProfile = (
      <React.Fragment>
        <form onSubmit={this.onCreateProfile}>
          <input
            required
            type="text"
            name="companyName"
            value={companyName}
            placeholder="Company Name"
            onChange={this.handleChange}
          />
          <textarea
            type="text"
            name="companyDescription"
            value={companyDescription}
            placeholder="Write a description about your company"
            onChange={this.handleChange}
          ></textarea>
          <input
            required
            type="text"
            name="companyLink"
            value={companyLink}
            placeholder="Enter a link to your company website"
            onChange={this.handleChange}
          />

        </form>
      </React.Fragment>
    )
    return (
      <div>
        {user_type === 'job_seeker' ? jobSeekerProfile : employerProfile}
      </div>
    )
  }
}

export default withRouter(CreateProfile)
