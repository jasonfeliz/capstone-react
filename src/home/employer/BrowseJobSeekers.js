import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { getJobSeekersApi } from '../homeApi'
import JobSeeker  from '../JobSeeker'
// import messages from '../messages'
// import apiUrl from '../../apiConfig'

class GetJobSeekers extends Component {
  constructor(props){
    super(props)
    this.state = {
      job_seekers: []
    }
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
    const JobSeekers = this.state.job_seekers.map(function(element,index){
      return (
        <JobSeeker key={index} data={element} />
      )
    })
    return (
      <div>
        {JobSeekers}
      </div>
    )
  }
}

export default GetJobSeekers
