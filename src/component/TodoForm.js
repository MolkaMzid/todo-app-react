
import React, { Component } from 'react';
import  TodoList from './TodoList';
class TodoForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        text: '',
        todos:[],
       
      };
    }
    handleChange= (e)=>{
        this.setState({text:e.target.value});
        };
        handleSubmit=()=>{
           this.setState({
                
                todos:[...this.state.todos,
                    <TodoList text={this.state.text}/>]
                });
               
            }
    render() {
        return (
<div  className="container">
        <div className="section1">

            <div className="p1">
                <h1 className="display-4"><strong>To-Do App!</strong></h1> <br></br>
                <p className="lead"> <strong> Add New To-Do</strong></p>
                
            </div>
            <div className="input-group mb-3">

                <input type="text" className=" input1 form-control"
                value ={this.state.text}  
                name="text"
                onChange={this.handleChange}
                 placeholder="Enter new task "
                  id="taskname" aria-label="Recipient's username">
</input>

            </div>
            <div className="position-btn">
                <button type="submit" onClick={this.handleSubmit} className="bouton" id="taskadd"><strong>Add</strong></button>
            </div>

        </div>
        {this.state.todos}
    </div>
     );
    }
  }
  export default TodoForm;