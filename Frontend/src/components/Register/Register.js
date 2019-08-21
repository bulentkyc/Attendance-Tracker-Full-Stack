import React from 'react';
import './Register.css';

export default class Registration extends React.Component{

  state = {
    userName: '',
    email: '',
    password:'',
    secondPassword: ''
  }

  updateValue = (event)=>{
    console.log(this.state)
    this.setState({[event.target.name]: event.target.value})
  }

  registration = (event)=> {
    event.preventDefault()
  }

  render(){
    return (  
      <div className='containerForm' >
          <h1> <i className="fas fa-plus"></i> Register </h1>
          <form onSubmit={this.registration}> 
            <div> 
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Enter Name" name='userName' onChange={this.updateValue} value={this.state.userName}/> 
            </div>

            <div> 
                <i className="fas fa-envelope"></i>
              <input type="text" placeholder="Enter Email" name='email' onChange={this.updateValue} value={this.state.email}/>
            </div>

            <div> 
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Create Password" name='password' onChange={this.updateValue} value={this.state.password}/> 
            </div>

            <div> 
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Confirm Password" name='secondPassword' onChange={this.updateValue} value={this.state.secondPassword}/> 
            </div>
            <input type="submit" value="Register" className="button"/>
          </form>
    </div>
  )
}
}
