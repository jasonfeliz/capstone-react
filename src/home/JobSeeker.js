import React from 'react'

const JobSeeker = props => {
  return (
    <li>
      <p>{ props.data.user.full_name }</p>
      <p>{ props.data.user.job_title }</p>
      <p>{ props.data.user.location}</p>
      <p>{ props.data.about_me}</p>
      <p>{ props.data.user.email }</p>
      <p>{ props.data.code_wars_username }</p>
    </li>
  )
}

export default JobSeeker
