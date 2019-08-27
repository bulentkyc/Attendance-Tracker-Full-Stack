import React from 'react';
import DropdownMe from '../Dropdown/Dropdown';

function Homepage(props) {

    //I am catching props with consolelog to be sure that I have them passed from App.js
    console.log(props.forDropDown);

    return (

        <div>
            <h1>Hello from Home page</h1>
            {
                //I am passing props further to the next child component. My end point should be Dropdown.js component
            }
            <DropdownMe forChildDrop={props.forDropDown} />
        </div>
    );

}

export default Homepage

