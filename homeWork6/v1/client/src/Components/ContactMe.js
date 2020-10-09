import React, { Component } from 'react'
import './ContactMe.css';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
/*import {withStyles} from '@material-ui/core/styles';*/
import Axios from 'axios';
import { withRouter } from 'react-router-dom'
import  TransitionsModal  from "./TransitionsModal";
import Email_input from './Email_input';
import CssBaseline from '@material-ui/core/CssBaseline';





class ContactMe extends Component {

    constructor(props){
        super(props);

        this.state = {
            users:[],

            userName:'',
            userEmail:'',
            emailError:'',
            userMessage:''
        };
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handleUserEmailChange = this.handleUserEmailChange.bind(this);
        this.handleUserMessageChange = this.handleUserMessageChange.bind(this);
        this.handleUserSend = this.handleUserSend.bind(this);


    }

    async componentDidMount() {

        // Load all of the users as soon as this component mounts
        await this.loadUsers()
    }


    handleUserNameChange(event) {
        this.setState({userName: event.target.value});
    }

    handleUserEmailChange = userEmail => event => {
        this.setState({[userEmail]: event.target.value});
    }

    handleUserMessageChange(event) {
        this.setState({userMessage: event.target.value});
    }

    validate(){
        let isError = false;
        const errors = {emailError:''};
        const email = this.state.userEmail;

        if (!email.includes('@','.')|| email.length < 3){
            isError = true;
            errors.emailError = "Please enter valid Email eddress";
    
        }

        if(isError){
            this.setState({
                ...this.state,
                ...errors
            });
        }
        return isError;
    }

    async handleUserSend(){

        const err = this.validate();
        const {userName, userEmail, userMessage} = this.state;

        if(!err){
            try{
                const data = {name: userName, emailAddress: userEmail, message: userMessage};
    
                await Axios.post('/api/users', data);
                
    
            } catch (error){
                console.error(error.message);
            }
        }
        this.handleUserEmailChange();
        
    }


    async loadUsers() {

            try {

                const response = await Axios.get('/api/users');
    
                const { data } = response;
    
                this.setState({ users: data });
    
            } catch (error) {
    
                console.error(error.message);
            }
       
    }

    

    render() {

        const{userName, userEmail, userMessage, emailError} = this.state;
        const values = {userEmail,emailError};
       /* const CssTextField = withStyles({
            root: {
              '& label.Mui-focused': {
                color: '#b0afae',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: '#b0afae',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'black',
                },
                '&:hover fieldset': {
                  borderColor: '#b0afae',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#b0afae',
                },
              },
            },
          })(TextField);
          
          */


        return (

            <React.Fragment>
                <CssBaseline>
                    <Container maxWidth='md' className="ContactMeContainer">
                        <div className="section12">
                            <div>
                                <h3 className = "ContactMeContainer-header">Get  In Touch</h3>
                            </div>
                            <div className="lineContactMe"></div>
                            <form className="form">  
                                <Typography component="div" className = "typoGraphyMe">
                                    <div>
                                        <div>
                                            <TextField
                                                label="Name"
                                                variant="outlined"
                                                id="custom-css-outlined-input"
                                                value = {userName}
                                                onChange = {this.handleUserNameChange}
                                                className = "textField"
                                            />
                                        </div>

                                            <Email_input
                                                values = {values}
                                                handleUserEmailChange = {this.handleUserEmailChange}
                                            
                                            />

                                        <div style = {{marginTop: '1rem'}}>
                                            <TextField
                                                label="Message"
                                                variant="outlined"
                                                id="outlined-multiline-static"
                                                multiline
                                                rows="5"
                                                value = {userMessage}
                                                onChange = {this.handleUserMessageChange}
                                                className = "textField"
                                            />
                                        </div>

                                        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                                        <div style = {{marginLeft:'12rem',marginTop:'5rem'}}>
                                        
                                            <TransitionsModal
                                                handleUserSend = {this.handleUserSend}
                                                values = {values}
                                                
                                            />  
                                        </div>
                                    </div>  
                                </Typography> 
                            </form>  
                        </div>
                    </Container> 
                </CssBaseline>
            </React.Fragment>

            
           
        )
    }
}

export default withRouter(ContactMe);
