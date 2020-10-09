import React, { Component } from 'react'
import './App.css'
import HomeIcon from './Icons/HomeIcon'
import ContactMe from './Icons/ContactMe'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom'

const Pdf = require('./KRUNAL_MISTRY_resume.pdf')

class NavigationBar extends Component {

  constructor(props) {
    super(props);

    this.handleHomePageNavigation = this.handleHomePageNavigation.bind(this);
    this.handleAboutPageNavigation = this.handleAboutPageNavigation.bind(this);
    this.handleContactPageNavigation = this.handleContactPageNavigation.bind(this);
    this.handleProjectsPageNavigation = this.handleProjectsPageNavigation.bind(this);
}


handleHomePageNavigation() {

  const { history } = this.props;

  history.push('/');
}


handleAboutPageNavigation() {

  const { history } = this.props;

  history.push('/about');
}

handleContactPageNavigation() {

  const { history } = this.props;

  history.push('/contact');
}

handleProjectsPageNavigation() {

  const { history } = this.props;

  history.push('/Projects');
}

openResume() {
  window.open(Pdf);
}



    render() {
        return (
          <nav id="navbar">
                <div>
            <AppBar position="static">
              <Toolbar className = "nav">

              
                <Button color="inherit" onClick={this.handleProjectsPageNavigation}  style = {{color:'#8F8F8F',fontFamily:'monospace', fontSize:20, marginRight:'3rem'}}>
                   Projects
                </Button> 
                
                <Button style={{color:'#8F8F8F'}} onClick={this.handleContactPageNavigation}>
                    <ContactMe  fontSize="large" />
                </Button>
                
                <Button style={{color:'#8F8F8F'}} onClick={this.handleHomePageNavigation}>
                    <HomeIcon  fontSize="large" />
                </Button>
               
                <Button color="inherit" onClick={this.handleAboutPageNavigation} style = {{color:'#8F8F8F',fontFamily:'monospace', fontSize:25}}>
                      Me
                </Button>

                <Button 
                    color="inherit" 
                    style = {{color:'#8F8F8F',fontFamily:'monospace', fontSize:20, marginLeft:'3rem'}} 
                    onClick = {this.openResume}>
                    Resume
                </Button>

              </Toolbar>
            </AppBar>
          </div>
          </nav>
            
        )
    }
}

export default withRouter (NavigationBar);
