import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownItem from 'react-bootstrap/DropdownItem';


class DropdownMe extends Component {



    render() {
        //I am catching props with the console log and passing them to the variables
        console.log(this.props.forChildDrop);
        let numbers = this.props.forChildDrop.data;
        let menuItem = numbers.map((actionItem) => <DropdownItem>{actionItem}</DropdownItem>)

        return (
            <div>


                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        {this.props.forChildDrop.caption}
                    </Dropdown.Toggle>

                    <Dropdown.Menu >
                        {menuItem}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}

export default DropdownMe