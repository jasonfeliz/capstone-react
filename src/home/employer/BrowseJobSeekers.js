import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { getJobSeekersApi,browseJobSeekersApi } from '../homeApi'
import JobSeeker  from '../JobSeeker'
// import messages from '../messages'
// import apiUrl from '../../apiConfig'

class GetJobSeekers extends Component {
  constructor(props){
    super(props)
    this.state = {
      browseByJobRoles: '',
      browseByBootcamp: '',
      job_seekers: []
    }
  }

  handleChange = event => {
    const { token } = this.props.user
    this.setState({
      [event.target.name]: event.target.value
    },function(){
      browseJobSeekersApi(token, this.state)
        .then(res => res.json())
        .then(res => {
          this.setState({
            job_seekers: res.job_seekers
          })
        })
        .catch(console.error)
    })


  }

  componentDidMount(){
    const { token } = this.props.user
    getJobSeekersApi(token)
      .then(res => res.json())
      .then(res => {
        this.setState({
          job_seekers: res.job_seekers
        })
      })
      .catch(console.error)
  }
  render () {
    const  {browseByJobRoles,browseByBootcamp } = this.state
    const BrowseHtml = (
      <React.Fragment>
        <span>Browse By:</span>
        <select required name="browseByJobRoles" value={browseByJobRoles} type="text" onChange={this.handleChange}>
          <option value="">All Jobs</option>
          <option value="Full-stack Developer">Full-stack Developer</option>
          <option value="Front-end Developer">Front-end Developer</option>
          <option value="Back-end Developer">Back-end Developer</option>
          <option value="Data Scientist">Data Scientist</option>
          <option value="UI/UX Designer">UI/UX Designer</option>
        </select>

        <select required name="browseByBootcamp" value={browseByBootcamp} type="text" onChange={this.handleChange}>
          <option value="">All Bootcamps</option>
          <option value="General Assembly">General Assembly</option>
          <option value="App Academy">App Academy</option>
          <option value="Launch Academy">Launch Academy</option>
          <option value="Hack Reactor">Hack Reactor</option>
          <option value="UI/UX Designer">UI/UX Designer</option>
        </select>
      </React.Fragment>
    )

    const JobSeekers = this.state.job_seekers.map(function(element,index){
      return (
        <JobSeeker key={index} data={element} />
      )
    })
    return (
      <div>
        {BrowseHtml}
        {JobSeekers}
      </div>
    )
  }
}

export default GetJobSeekers
