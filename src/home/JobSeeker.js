import React from 'react'

const JobSeeker = props => {
  return (
    <div className="job-seeker-item">
      <div>
        <span>{ props.data.user.full_name }</span>
        <span>{ props.data.job_title  }</span>
        <span>{ props.data.bootcamp}</span>
        <span>{ props.data.location }</span>
      </div>

      <div>
        <p>{ props.data.about_me}</p>
      </div>

      <div>
        <span>{ props.data.user.email }</span>
        <span><a href= {'https://' +props.data.linkedin_link} target="_blank">LinkedIn</a></span>
        <span><a href={'https://' +props.data.github_link} target="_blank">GitHub</a></span>
      </div>

    </div>
  )
}

export default JobSeeker
