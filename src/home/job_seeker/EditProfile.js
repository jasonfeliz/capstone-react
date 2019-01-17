import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// import { signIn } from '../api'
// import messages from '../messages'
// import apiUrl from '../../apiConfig'

class EditProfile extends Component {

  render () {
    const { user } = this.props
    return (
      <div>{user.token}</div>
    )
  }
}

export default EditProfile
