import React from 'react'
import { Route, Link } from 'react-router-dom'

import './Home.scss'
import GetJobs from './job_seeker/GetJobs'
import EditProfile from './job_seeker/EditProfile'
import BrowseJobSeekers from './employer/BrowseJobSeekers'
import CreatePost from './employer/CreatePost'
import EditPost from './employer/EditPost'
import GetMyJobs from './employer/GetMyJobs'
import BookmarkJob from './BookmarkJob'
import BookmarkIndex from './BookmarkIndex'
import ViewJobPost from './GetJob.js'

const Home = ({ user, flash }) => {
  const jobSeekerView = (
    <React.Fragment>
      <nav className="nav">
        <ul>
          <li><Link to="/home">Browse Jobs</Link></li>
          <li><Link to="/home/bookmarked-jobs">Bookmarked Jobs</Link></li>
          <li><Link to="/home/edit-profile">Edit Profile</Link></li>
        </ul>
      </nav>

      <div className='main-content'>
        <Route exact path='/home' render={() => (
          <GetJobs user={user} flash={flash}/>
        )} />
        <Route path='/home/bookmarked-jobs' render={() => (
          <BookmarkIndex user={user} flash={flash}/>
        )} />
        <Route path='/home/edit-profile' render={() => (
          <EditProfile flash={flash} user={user} />
        )} />
        <Route exact path="/home/bookmark" render={() => (
          <BookmarkJob flash={flash} user={user} />
        )}/>
        <Route path='/home/job-post' render={() => (
          <ViewJobPost flash={flash} user={user} />
        )} />
      </div>

    </React.Fragment>
  )

  const employerView = (
    <React.Fragment>
      <nav className="nav">
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
          <GetMyJobs flash={flash} user={user} />
        )} />
        <Route path='/home/edit-job-post' render={() => (
          <EditPost flash={flash} user={user} />
        )} />
        <Route path='/home/job-post' render={() => (
          <ViewJobPost flash={flash} user={user} />
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
