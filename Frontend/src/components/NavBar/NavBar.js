import React from 'react';
import './NavBar.scss';
import {Link} from 'react-router-dom'; 

class NavBar extends React.Component{

  render(){
    return(
      <div>
        <header>
          <Link to='/' className='logo'> 
            <img src='./img/logo.png' alt='logo' /> 
          </Link>
          <ul> 
            <li> <Link to='/'> Home </Link> </li>
            <li> <Link to='/register'> Register </Link> </li>
            <li> <Link to='/login'> Login </Link> </li>
          </ul>
        </header>
      </div>
    );
  }
}
export default NavBar
