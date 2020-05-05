
import React, { Component } from 'react';
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUndo:false,
            isDele:false,
  };
}

Undo=()=>{
    
    this.setState({
        isUndo:true,
    })
    
}
Remove=()=>{
    this.setState({
        isDele:true,
    })
}
    
render() {
    return (
        <div>
        
        
      
        <div className={(this.state.isDele)?"None":"Block"}>
            <button onClick={this.Undo}>{(this.state.isUndo)?'Undo':'Complete'}</button>
            <button onClick={this.Remove}>Delete</button>
            <span style={{textDecoration:(this.state.isUndo)&&"line-through"}}>{this.props.text}</span>
        </div>
        </div>
        );
    }
}
  export default TodoList;