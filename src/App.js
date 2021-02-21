import React, { Component } from 'react';
import Nav from './Nav/Nav'
import Welcome from './Welcome/Welcome'
import About from './About/About'
import Project from './Project/Project'
import Contact from './Contact/Contact'
import { Route } from 'react-router-dom'
import photo from './Images/juan-with-dog.jpg'
import './App.css'

class App extends Component {

  renderNavRoute() {
    return (
      <>
      <Route path='/Contact' component={Contact} />
      </>
    )
  }
  render() {
    return (
      <section className="App">
        <Nav />
        <section className='intro'>
          <img src={photo} alt="Juan with Black Dog" width="100%"/>
          <Welcome />
        </section>
        <About />
        <Project />
        <Contact />
      </section>
    );
  }
}

export default App;