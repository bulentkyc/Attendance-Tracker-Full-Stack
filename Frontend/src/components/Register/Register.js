import React from 'react';
import axios from 'axios';
import './Register.css';
import './Slider.css';
import Slider from './Slider';

export default class Registration extends React.Component {
  state = {
    userName: '',
    email: '',
    password: '',
    secondPassword: '',
    errors: [],
    status: ''
  }
  swiperHandler = () => {
    let activeImg = document.querySelector('.swiper-slide-active');
    this.setState({ status: activeImg.firstChild.alt });
  }
  updateValue = (event) => {
    console.log(this.state)
    this.setState({ [event.target.name]: event.target.value })
  }

  registration = (event) => {
    event.preventDefault();

    let obj = {
      // 1st step : we have to know the names from Backend side
      name: this.state.userName,
      emailUser: this.state.email,
      passwordUser: this.state.password,
      passwordUser2: this.state.secondPassword
    };

    if (this.validation(obj)) {
      axios
        .post('/registerUser', { ...obj })
        .then((response) => {
          console.log(response);
          if (response.data.status === 'success') {
            //successful situation
          } else {
            this.setState({ errors: response.data.errors });
            // reset password
            this.setState({ password: '', secondPassword: '' })
          }
        })
        .catch((err) => {
          this.setState({ errors: ['There was a problem with server, Please try again later.'] });
        });
    } else {
      // resetting Password Field
      this.setState({ password: '', secondPassword: '' })
    }
  }

  validation(obj) {
    let errors = [];
    let isValid = true;
    const emailReg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (obj.name.trim().length < 2) {
      errors.push('Please enter your Full name');
      isValid = false;
    }
    if (!emailReg.test(obj.emailUser)) {
      errors.push('Please enter your email address');
      isValid = false;
    }
    if (obj.passwordUser.trim().length < 6) {
      errors.push('Your password should be more than 6 letter');
      isValid = false;
    }
    if (obj.passwordUser !== obj.passwordUser2) {
      errors.push('Your password should match the confirm password');
      isValid = false;
    }
    this.setState({ errors });
    return isValid;
  }

  render() {
    return (
      <React.Fragment>
        <Slider swiperHandler={this.swiperHandler} />
        <div className='containerForm' >
          <h1> <i className="fas fa-plus"></i> Register {this.state.status}</h1>
          {this.state.errors.map((error, index) => (
            <p className='error' key={index}>
              {error}
            </p>
          ))}
          <form onSubmit={this.registration}>
            <div>
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Enter Name" name='userName' onChange={this.updateValue} value={this.state.userName} />
            </div>

            <div>
              <i className="fas fa-envelope"></i>
              <input type="text" placeholder="Enter Email" name='email' onChange={this.updateValue} value={this.state.email} />
            </div>

            <div>
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Create Password" name='password' onChange={this.updateValue} value={this.state.password} />
            </div>

            <div>
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Confirm Password" name='secondPassword' onChange={this.updateValue} value={this.state.secondPassword} />
            </div>
            <input type="submit" value="Register" className="button" />
          </form>
        </div>
      </React.Fragment>
    )
  }
}
