import React, { Component } from 'react'
import './Projects.css'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';


const img0 = require('../ProjectImages/img0.jpg');
const img1 = require('../ProjectImages/img1.jpg');
const img2 = require('../ProjectImages/img2.jpg');





export class Projects extends Component {
    
    render() {

        return (
          <React.Fragment>
            <CssBaseline>
              <Container maxWidth='xl' className="contactMeContainer">

                        <div className="colFull">
                          <h2 className="section1-title">My favorite Projects</h2>
                        </div>
                        <div className="undered line"></div>
                        <div className="container">
                            <div className="fx2">
                                  
                                  <a href="https://kmist1@bitbucket.org/kmist1/amusementpark">
                                    <div className="item col4">
                                          <img className="transition img-responsive" src={img0}/>
                                          <h4>Amusement Park</h4>
                                          <p>Click for more information </p>
                                      </div>
                                  </a>
                            

                                
                                <a href="https://github.com/UNH-iOS-Spring20/final-project-krunal-milan">
                                    <div className="item col4">
                                          <img className="transition img-responsive" src={img1}/>
                                          <h4>iPark - iOS App</h4>
                                          <p>Click for more information</p>
                                      </div>
                                  </a>
                                
                                  
                            
                            
                                  <a href="https://bitbucket.org/kmist1/portfolio_v1/src/develop/">
                                    <div className="item col4">
                                          <img className="transition img-responsive" src={img2}/>
                                          <h4>Personal Website - v1</h4>
                                          <p>Click for more information</p>
                                      </div>
                                  </a>

                                    <div className="moreToCome"> (More Coming Soon) </div>
                          
                                    </div> 
                        </div>

                
              </Container>
            </CssBaseline>
          </React.Fragment>               
        )
    }
}

export default Projects
