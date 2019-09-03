import React, { Component } from 'react';
import '../Register/Register.scss';
import AuthHelperMethods from "./AuthHelperMethods";


export default function withAuth(AuthComponent) {
    const Auth = new AuthHelperMethods();

    return class Login extends Component {
        state = {
            confirm: null,
            loaded: false
        };
        componentDidMount() {
            if (!Auth.loggedIn()) {
                this.props.history.replace("/login");
            } else {
                /* Try to get confirmation message from the Auth helper. */
                try {
                    const confirm = Auth.getConfirm();
                    console.log("confirmation is:", confirm);
                    this.setState({
                        confirm: confirm,
                        loaded: true
                    });
                } catch (err) {
                    /* Oh snap! Looks like there's an error so we'll print it out and log the user out for security reasons. */
                    console.log(err);
                    Auth.logout();
                    this.props.history.replace("/login");
                }
            }
        }

        render() {
            return (
                <div className="containerForm">
                    <form onSubmit={this.loginHandler}>
                        <div>
                            <i className="fas fa-envelope" />
                            <input
                                type="text"
                                placeholder="Enter Email"
                                name="email"
                            />
                        </div>
                        <div>
                            <i className="fas fa-lock" />
                            <input
                                type="password"
                                placeholder="Create Password"
                                name="password"
                            />
                        </div>
                        <input type="submit" value="Login" className="button" />
                    </form >
                </div >
            );
        }
    }
}


