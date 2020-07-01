import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class TopBar extends Component {

    constructor (props) {
        super(props);
        this.loginMailRef = React.createRef();
        this.loginPassRef = React.createRef();
        this.state = {
            isLoginOpen: false
        };
    }

    handleLoginClose = () => {
        this.setState({
            isLoginOpen: false
        });
    }

    handleLoginOpen = () => {
        this.setState({
            isLoginOpen: true
        });
    }

    handleLogin = () => {
        console.log(this.loginRef.current);
    }

    renderLoginForm () {
        return (
        <Dialog open={this.state.isLoginOpen} onClose={this.handleLoginClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send updates
                        occasionally.
                    </DialogContentText>
            <input ref={this.loginRef} placeholder="Email address" />
            <input ref={this.loginRef} placeholder="password" />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleLoginClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleLogin} color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
        );
    }

    render () {
        return (
        <>
        <div className="topBar">
            <div className="appNameWrapper">
              <span className="appLogo"></span>
              <span className="appName">Pockets</span>
            </div>
            <div className="actionWrapper">
              <button className="btn btn-primary" type="button">Register</button>
              <button onClick={this.handleLoginOpen} className="btn btn-primary" type="button">Log in</button>
            </div>
        </div>
       {this.renderLoginForm()}
        </>
        );
    }

}

export {TopBar};