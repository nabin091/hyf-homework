import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Task from './todoitems.js';

//rendering the list
class TodoList extends React.Component {
    render () {
        const todos = [
            {
            title: "Get out of bed",
            date: "Wed jan 28 2020"
        },
        {
            
            title: "Brush teeth",
            date: "Thu jan 29 2020"
        },
        {   
            title: "Eat breakfast",
            date: "Fri jan 30 2020"
        }];
        return (
            <div>
                <h1>Todo List</h1>
                <form className="todos"> 
                    { todos.map(todoItem => (
                        <Task task={todoItem}/>
                    ))
                    }
                </form>
            </div>
        );
    }
}

ReactDOM.render(<TodoList />, document.getElementById('root'));