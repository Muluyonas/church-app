import React, { Component } from 'react'

import {Switch, Route, withRouter} from 'react-router-dom';

import Header from './component/Header/Header'
import Nav from './component/Nav/Nav'
import Footer from './component/Footer/Footer'

import Hero from './component/Hero/Hero'
import NotFound from './component/NotFound/NotFound'
import ServiceAndNews from './views/Service/ServiceAndNews'
import VideoAndPhoto from './views/Photo/VideoAndPhoto'
import Contact from './views/Contact/Contact'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app">
         <Header />
         <Nav />

         <Switch>
           <Route exact path = "/" component={Hero} />
           <Route exact path = "/service-news" component={ServiceAndNews} />
           <Route exact path = "/video-photo" component={VideoAndPhoto} />
           <Route exact path = "/contact" component={Contact} />
           <Route path = "*" component={NotFound} />
         </Switch>
         
         <Footer />
      </div>
    )
  }
}

export default withRouter(App);
