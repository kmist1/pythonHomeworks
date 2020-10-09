import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';

class Email_input extends Component {
    render() {
        const {values,handleUserEmailChange} = this.props;
        
        return (
            <div style = {{marginTop: '1rem'}}>
                <TextField
                    label="Email"
                    variant="outlined"
                    id="custom-css-outlined-input"
                    defaultValue = {values.userEmail}
                    helperText={this.helperText}
                    onChange = {handleUserEmailChange('userEmail')}
                    className = "textField"
                    error = {values.emailError}
                />
                 <div style = {{fontSize: 12, color:'red'}}>
                                {values.emailError}  
                </div>
            </div>
        )
    }
}

export default Email_input
