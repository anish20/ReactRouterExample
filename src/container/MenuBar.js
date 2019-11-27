import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import '../App.css';
class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
           <div>
               <ul>
                        <li>
                        <NavLink exact activeClassName="active" to="/">Home</NavLink>
                        </li>
                        <li>
                        <NavLink activeClassName="active" to="/users">Users</NavLink>
                        </li>
                        <li>
                        <NavLink activeClassName="active" to="/contact">Contact</NavLink>
                        </li>
                        <li>
                        <NavLink activeClassName="active" to="/about">About</NavLink>
                        </li>
                    </ul>
           </div> 
        );
    }
}



export default MenuBar
