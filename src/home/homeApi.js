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
