import React, { Component } from 'react'
import NavigationBar from './NavigationBar'
import './App.css'
import HomePage from './Components/HomePage';
import AboutMe from './Components/AboutMe';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactMe from './Components/ContactMe'
import Projects from './Components/Projects';

class App extends Component {
  render() {
    return (
     
     
      <div className = "container1">
        <div>
          <Router>
              <NavigationBar/>
              <Switch>
                <Route path = "/projects">
                    <Projects  />
                </Route>

                <Route path = "/Contact">
                  <ContactMe />
                </Route>

                <Route path = "/about">
                 <AboutMe  />
                </Route>

                <Route path = "/">
                  <HomePage  />
                </Route>
              </Switch>

              <footer className="footer">

                  <div>
                      © 2020 Copyright Created by Krunal Mistry
                  </div>

              </footer>
          </Router>
        
        </div>
      </div>
      
     
    )
  }
}

export default App
