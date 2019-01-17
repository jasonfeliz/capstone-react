import React, { Component } from 'react'
import './App.scss'
import { Route, Link } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import Home from './home/Home'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      flashMessage: '',
      flashType: null
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  flash = (message, type) => {
    this.setState({ flashMessage: message, flashType: type })

    clearTimeout(this.messageTimeout)

    this.messageTimeout = setTimeout(() => this.setState({flashMessage: null
    }), 2000)
  }

  render () {
    const { flashMessage, flashType, user } = this.state

    const bannerHtml = (
      <React.Fragment>
        <div className="banner">
          <div>
            <h2>Some banner text</h2>
          </div>
          <div>
            <SignUp flash={this.flash} setUser={this.setUser} />
          </div>
        </div>
        <div className="about">
          <div>
            <h3>For Companies</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                industries Lorem Ipsum has been the industry&#39;s standard dummy text
                ever since the 1500&#39;s when an unknown printer took a galley of type and scrambled i
                t to make a type specimen book.</p>
          </div>
          <div>
            <h3>For Job Seekers</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry.\ Lorem Ipsum has been the industry&#39;s standard dummy text
                  ever since the 1500&#39;s, when an unknown printer took a galley of type and scrambled i
                  t to make a type specimen book.</p>
          </div>
        </div>
      </React.Fragment>
    )

    return (
      <React.Fragment>
        <Header user={user} />
        {flashMessage && <h3 className={flashType}>{flashMessage}</h3>}

        <main className="container">
          <Route path='/sign-in' render={() => (
            <SignIn flash={this.flash} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut flash={this.flash} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword flash={this.flash} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/home' render={() => (
            <Home user={user} />
          )} />
          <Route exact path='/' render={() => (
            bannerHtml
          )} />
        </main>
      </React.Fragment>
    )
  }
}

export default App
