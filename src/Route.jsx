import React from 'react';
import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom';
import App from './App'; 
import About from '../src/container/About';
import Contact from '../src/container/Contact';
import Users from '../src/container/Users';
import MenuBar from './container/MenuBar';
import NotFound from './container/NotFound';
class MyRoute extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <Router>
                    <div>
                    <MenuBar  /><hr></hr>
                       <Switch>
                        <Route exact path='/' component={App} />
                        <Route path='/about' component={About} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/users/:id' component={Users} />
                        <Route path="*" component={NotFound} />
                        </Switch>
                    </div>
                </Router>
             
        );
    }
}

export default MyRoute;
