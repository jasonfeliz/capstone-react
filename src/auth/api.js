import apiUrl from '../apiConfig.js'


export const handleErrors = res => {
  if (res.ok) {
    return res
  } else  {
    throw new Error('Recieved status in 400 or 500 range.')
  }
}

export const signUp = credentials => {
  return fetch(apiUrl + '/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      credentials: {
        first_name: credentials.firstName,
        last_name: credentials.lastName,
        email: credentials.email,
        password: credentials.password,
        password_confirmation: credentials.passwordConfirmation,
        user_type: credentials.userType,
      }
    })
  })
}

export const signIn = credentials => {
  return fetch(apiUrl + '/sign-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      credentials: {
        email: credentials.email,
        password: credentials.password,
      }
    })
  })
}

export const signOut = user => {
  return fetch(apiUrl + '/sign-out', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    }
  })
}

export const changePassword = (passwords, user) => {
  return fetch(apiUrl + '/change-password', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    },
    body: JSON.stringify({
      passwords: {
        old: passwords.oldPassword,
        new: passwords.newPassword
      }
    })
  })
}

export const createProfileApiJS = data => {

  return fetch(apiUrl + '/job_seekers', {
    method:'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${data.token}`
    },
    body: JSON.stringify({
      job_seeker: {
        user_id: data.userId,
        about_me: data.aboutMe,
        job_title: data.jobTitle,
        location: data.location,
        resume_link:data.resumeLink,
        code_wars_username:data.codewarsUsername,
        code_wars_api_key:data.codewarsApiKey,
        linkedin_link:data.linkedinLink,
        github_link:data.githubLink,
      }
    })
  })
}

export const createProfileApiE = data => {

  return fetch(apiUrl + '/employers', {
    method:'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${data.token}`
    },
    body: JSON.stringify({
      employer: {
        user_id:data.userId,
        company_name: data.companyName,
        company_description: data.companyDescription,
        company_link: data.companyLink,

      }
    })
  })
}
