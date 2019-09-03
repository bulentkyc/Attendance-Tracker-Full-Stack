import React, { Component } from 'react';
import './Observer.scss';
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import AddModal from '../Modal/AddModal';

export default class Observer extends Component {
    state = {
        status: '',
        addModalShow: false
    }

    render() {
        console.log(this.props);
        let addModalClose = () => this.setState({ addModalShow: false });
        return (
            <React.Fragment>
                <div className="my-flex">
                    <div>Logo</div>
                    <nav>
                        <NavLink className="pr-5" to="/Home">Home</NavLink>
                        <NavLink className="pr-5" to="/Register">Register</NavLink>
                        <NavLink className="pr-5" to="/Login">Login</NavLink>
                    </nav>
                </div>
                <div className="sub-nav">
                    <Dropdown>
                        <button>Invite</button>
                        <button>Profile</button>
                        <button disabled>Admin</button>
                        <Dropdown.Toggle id="dropdown-basic" className="bg-dark">
                            Class
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">FBW6</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">FBW7</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">FBW5</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <aside>
                    <figure className="p-5">
                        <div
                            className="circle"
                            onClick={() => this.setState({ addModalShow: true })}
                        >
                            <img src="./imgs/observer.jpeg" alt="observer"></img>
                        </div>
                        <AddModal
                            show={this.state.addModalShow}
                            onHide={addModalClose}
                        />
                        <div className="circle">
                            <img></img>
                        </div>
                        <div className="circle">
                            <img></img>
                        </div>
                        <div className="circle">
                            <img></img>
                        </div>
                        <div className="circle">
                            <img></img>
                        </div>
                        <div className="circle">
                            <img></img>
                        </div>
                        <div className="circle">
                            <img></img>
                        </div>
                        <div className="circle">
                            <img></img>
                        </div>
                        <div className="circle">
                            <img></img>
                        </div>
                        <div className="circle">
                            <img></img>
                        </div>
                    </figure>
                </aside>
            </React.Fragment >
        )
    }
}

