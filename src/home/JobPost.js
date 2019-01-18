import React from 'react'

const JobPost = props => {
  return (
    <li>
      <h4>{ props.data.job_title}</h4>
      <p>{ props.data.job_description }</p>
    </li>
  )
}

export default JobPost
