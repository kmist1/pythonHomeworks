import React, { Component } from 'react'
import './AboutMe.css'
import { Container } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

class AboutMe extends Component {
    render() {
        return (

            <React.Fragment>
                <CssBaseline>
                    <Container maxWidth='xl'>
                            <div className = "AboutMeContainer" >
                                <div className = "AboutMeContainer-header"> 
                                    <h1>About Me</h1>
                                </div>
                                <div className="line"></div>
                                <div>
                                   <h5 className = "AboutMeContainer-paragraph">
                                        Hi! I am Krunal Mistry, a software engineer based in New haven, CT. I develop website and web applications which provides perfect
                                        user interfaces with efficient and mordern backends. I'am persuing Master of Science from University of New Haven and seeking 
                                        opportunities as a summer intern / full time.
                                   </h5>
                                   <h4 className="h4">Technical Skills</h4>

                                   <div className="section4">
                                                    <div>
                                                        <h4 className="h4">Programming Languages
                                                            <h5>
                                                                <li>C/C++</li>
                                                                <li>Java</li>
                                                                <li>JavaScript(ES6)</li>
                                                                <li>Python</li>
                                                                <li>HTML5</li>
                                                                <li>CSS3</li>
                                                            </h5>
                                                        </h4>  
                                                    </div>
                                                    <div>
                                                        <h4 style={{marginLeft:'7rem'}} className="h4" >Libraries & Framework
                                                            <h5>
                                                                <li>React</li>
                                                                <li>Node.js</li>
                                                                <li>Express</li>
                                                            </h5>
                                                        </h4>  
                                                    </div>
                                                    <div>
                                                        <h4 style={{marginLeft:'7rem'}} className="h4">Tools & Platforms
                                                            <h5>
                                                                <li>Visual Studio Code</li>
                                                                <li>Xcode</li>
                                                                <li>Wireshark</li>
                                                                <li>Cisco Packet Tracer</li>
                                                                <li>AWS</li>
                                                                <li>ARDUINO</li>
                                                            </h5>
                                                        </h4>  
                                                    </div>
                                                </div>
                                </div>
                            </div>
                    </Container>
                </CssBaseline>
            </React.Fragment> 
        )
    }
}

export default AboutMe
