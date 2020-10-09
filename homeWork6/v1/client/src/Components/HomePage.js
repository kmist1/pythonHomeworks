import React, { Component } from 'react'
import './Animation.css'
import './HomePage.css'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';




const imgMyimageexample = require('./MyImage.jpeg');





class HomePage extends Component {
    render() {
        return (

            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg" className="homePageContainer">
                        <div className="section11">
                            <div className="section22">
                                    <div className="carreaux_presentation_light" style={{backgroundImage:`url(${imgMyimageexample})`,borderRadius:'20%'}}>
                                        <div className="shadow_swhow_mini">
                                            <div className="deroul_titre">Krunal Mistry</div>
                                            <div className="deroul_soustitre">Software Engineer</div>
                                        </div>
                                    </div>
                            </div>
                            <div className="briefIntro">Full Stack Developer based in New Haven,CT spcializing in building high-quality websites and applications. </div>
                            <div className="socialMedia">
                                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                                <ul className="socialMedia">
                                        <li className = "list">
                                            <a href="https://www.facebook.com/krunal.mistry.1481" className="fa fa-facebook"/>
                                        </li>
                                    
                                    
                                        <li className = "list">
                                            <a href="https://www.linkedin.com/in/krunal-mistry" className="fa fa-linkedin"/>   
                                        </li>
                                    
                                    
                                        <li className = "list">
                                            <a href="https://bitbucket.org/snippets/kmist1/" className="fa fa-bitbucket"/>
                                        </li>
                                        </ul>
                            </div> 
                            <div className="lineSocial"></div>
                            <div className="myEmail"><a href="mailto: krunalmistry119@gmail.com" style = {{color:'black',textDecoration:'none'}} >krunalmistry119@gmail.com</a></div>
                            <div className="lineEmail"></div>
                        </div>
                </Container>
            </React.Fragment>
        )
    }
}

export default HomePage
