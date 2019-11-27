import React from 'react';
import Home from './Home';
class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state={title:'Contact...',data:[{id:1,name:'Anish',address:'Sultanpur'},{id:2,name:'Dinesh',address:'Allahabad'},{id:3,name:'Rakesh Pandit',address:'Bihar'}]}
        
    }

    changeTitleState(){
        this.setState({title:'Hello this Title changed after Clicked '});
    }

    clickHandle(){
        const{history}=this.props;
        this.changeTitleState();
        setTimeout(()=>{
            history.push('/');
        },5000);
    }

    renderData(){
        const{data}=this.state;
        return (
            <div>
                <table  border="1">
                     <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Address</td>
                        </tr>
                        
                {data.map((item,i)=>
                <tr key={i}>
                     <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.address}</td>
                            </tr>
                )}
                </table>
            </div>
        )
    }

    render() {
        return (
           <div>
             {this.state.title}
             <br></br>
               <button onClick={this.clickHandle.bind(this)}> Click Me!</button>
               {this.renderData()}
            
            </div> 
        );
    }
}

export default Contact
