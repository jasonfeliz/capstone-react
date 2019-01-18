import React from 'react'
import { Route, Link } from 'react-router-dom'

import './Home.scss'
import GetJobs from './job_seeker/GetJobs'
import EditProfile from './job_seeker/EditProfile'
import BrowseJobSeekers from './employer/BrowseJobSeekers'
import CreatePost from './employer/CreatePost'

const Home = ({ user, flash }) => {
  const jobSeekerView = (
    <React.Fragment>
      <nav>
        <ul>
          <li><Link to="/home">Browse Jobs</Link></li>
          <li><Link to="/home/bookmarked-jobs">Bookmarked Jobs</Link></li>
          <li><Link to="/home/edit-profile">Edit Profile</Link></li>
        </ul>
      </nav>

      <div className='main-content'>
        <Route exact path='/home' render={() => (
          <GetJobs user={user} />
        )} />
        <Route path='/home/bookmarked-jobs' render={() => (
          <p>my bookmarked jobs</p>
        )} />
        <Route path='/home/edit-profile' render={() => (
          <EditProfile user={user} />
        )} />
      </div>

    </React.Fragment>
  )

  const employerView = (
    <React.Fragment>
      <nav>
        <ul>
          <li><Link to="/home">Browse Job Seekers</Link></li>
          <li><Link to="/home/create-job-post">Create Job Post</Link></li>
          <li><Link to="/home/my-job-posts">My Job Posts</Link></li>
        </ul>
      </nav>

      <div className='main-content'>
        <Route exact path='/home' render={() => (
          <BrowseJobSeekers user={user} />
        )} />
        <Route path='/home/create-job-post' render={() => (
          <CreatePost flash={flash} user={user} />
        )} />
        <Route path='/home/my-job-posts' render={() => (
          <p>get all of my job posts</p>
        )} />
      </div>

    </React.Fragment>
  )

  return (
    <div>
      { user.user_type === 'job_seeker'  ? jobSeekerView : employerView }
    </div>
  )
}
export default Home
