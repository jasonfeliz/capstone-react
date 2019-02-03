import apiUrl from '../apiConfig.js'


export const createPostApi = data => {

  return fetch(apiUrl + '/job_posts', {
    method:'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${data.token}`
    },
    body: JSON.stringify({
      job_post: {
        job_title: data.jobTitle,
        job_description: data.jobDescription,
        user_id: data.userId
      }
    })
  })
}


export const getJobPostsApi = token => {

  return fetch(apiUrl + '/job_posts',{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token token=${token}`
    }
  })
}

export const getMyJobPostsApi = data => {
  return fetch(apiUrl + '/my_job_posts/' + data.id.$oid,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token token=${data.token}`
    }
  })
}

export const getJobSeekersApi = token => {

  return fetch(apiUrl + '/job_seekers',{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token token=${token}`
    }
  })
}

export const getJobSeekerApi = data => {
  return fetch(apiUrl + '/job_seekers/' + data.userId,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token token=${data.token}`
    }
  })
}

export const editProfileApi = data => {
  return fetch(apiUrl + '/job_seekers/' + data.id, {
    method:'PATCH',
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


export const bookmarkApi = (postId, jsId) => {
  return fetch(apiUrl + '/bookmarks', {
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      bookmark: {
        job_post_id: postId,
        job_seeker_id: jsId,
      }
    })
  })
}


export const allBookmarksApi = (data) => {
  console.log(data)
  // return fetch(apiUrl + '/bookmarks/' + data.id.$oid, {
  //   method:'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Token token=${data.token}`
  //   }
  // })
}

export const removeJobApi = (postId,token) => {
  return fetch(apiUrl + '/job_posts/' + postId,{
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token token=${token}`
    }
  })
}
