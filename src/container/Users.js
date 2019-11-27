import React from 'react';
class Users extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        console.log(this.props);
        const { params } = this.props.match
        return (
           <div>
               Users..
               <hr></hr>
               ID:{params.id}
               </div> 

        );
    }
}
export default Users
