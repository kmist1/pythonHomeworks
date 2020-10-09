import React from 'react'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import './ContactMe.css'


 class TransitionsModal extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        open : false
    }
  }


  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render(){
    const {values,handleUserSend} = this.props;
    
    if(!values.emailError){

      return (
        <div>
           <Button
              variant="contained"
              size="large"
              endIcon={<Icon>send</Icon>}
              onClick = {(e)=> {handleUserSend(e);this.handleOpen()}}
              style={{color:'#0D3030'}}
  
          >
              Send
            </Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={this.state.open}>
                <div className = "transistionModalText">Thank you for contacting me. I'll get
                  back to you ASAP</div>
            </Fade>
          </Modal>
        </div>
      )
    }
    else{
      return(
        <div>
           <Button
              variant="contained"
              size="large"
              endIcon={<Icon>send</Icon>}
              onClick = {(e)=> {handleUserSend(e);this.handleOpen()}}
              style={{color:'#0D3030'}}
  
          >
              Send
            </Button>
          <Modal
            open={this.state.open}
            onClose={this.handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={this.state.open}>
                <div className = "transistionModalText">Something is wrong!</div>
            </Fade>
          </Modal>
        </div>
      )
    }
  }
    
  }

  export default TransitionsModal;

