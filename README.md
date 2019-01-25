# Read Me

Link to API Repo - <https://github.com/jasonfeliz/capstone-api>


## Technologies used
* ReactJs
* JavaScript
* Ruby on Rails
* Mongoid(ODM)
* MongoDB


## Scope
I am going to build a job board app for coding bootcamp graduates. It will have 2 types of users, companies and job seekers. Companies will be able to post jobs and browse profiles of the job seekers. Job Seekers will be able to build a candidate profile and search & apply for jobs. The API will be built in Rails and front-end will use ReactJs  library to render the application to UI. For job seekers, I will give the user an option to connect to codewars.com account using the CodeWars API.

## Planning

Plan:
1. write and test code for each feature or user story before moving on to next feature (BackEnd)
2. Make an outline of each component
3. write and test each component
4. Add Styling with css

Goals
[]Make it a single page app
[]Build and deploy job board api using Rails and MongoDB
[]Create a simple components with React
[]Keep code modular(separate concerns)

## Data Structure
### Users
* First Name
* Last Name
* Email
* User type
* password
* Token

### User type
* Employer
* Job Seeker

### Job seeker profile
* User id
* Skills
* About me
* Title
* Location
* Resume link
* Code wars username
* Code wars api token
* Linkedin link
* GitHub link

### Employer profile
* User id
* Company name
* Location
* Company description
* Company link

### Job Post
* Employer id
* title
* description
* Desired_skills

## User Stories
### Company
* As a company, I will be able to sign up
* As a company, I will be able to sign in
* As a company, I will be able to change password
* As a company, I will be able to sign out
* As a company, I will be able to post jobs for job seekers to see
* As a company, I will be able to update job posts
* As a company, I will be able to delete job posts
* As a company, I will be able to get all of my job posts
* As a company, I will be able to browse job seeker's profiles
* As a company, I will be able to see the job seeker’s CodeWars challenges or Kata

### Job Seeker
* As a Job Seeker, I will be able to sign up
* As a Job Seeker, I will be able to sign in
* As a Job Seeker, I will be able to change password
* As a Job Seeker, I will be able to sign out
* As a Job Seeker, I will be able to create a profile
* As a Job Seeker, I will be able to connect my profile to a CodeWars account, if I have one
* As a Job Seeker, I will be able to to upload my resume to my profile
* As a Job Seeker, I will be able to edit my profile
* As a Job Seeker, I will be able to search for jobs in a given location
* As a Job Seeker, I will be able to apply for jobs with a single click
* As a Job Seeker, I will be able to look at the jobs I have applied for

## Wire Frames
![alt text](https://i.imgur.com/aMQIQ0D.jpg "Logo Title Text 1")
![alt text](https://i.imgur.com/j3pU4D3.jpg "Logo Title Text 1")
![alt text](https://i.imgur.com/xGlIZUI.jpg "Logo Title Text 1")
![alt text](https://i.imgur.com/Z9Dbwo3.jpg "Logo Title Text 1")

## ERD
![alt text](https://i.imgur.com/gGFYXdh.png "Logo Title Text 1")
