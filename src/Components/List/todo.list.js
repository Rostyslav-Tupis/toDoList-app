import React, {useState} from 'react'
import TodoForm from '../Form/todo.form'
import './list.css'
import DeletIcon from '../delete.png'
import Edit from '../edit.png'


function TodoList({values,handleRemove,completedTask, updateTodo}) {
    const [edit , setEdit] = useState({
        id:null,
        text: '',
    })

    const submitUpdate =(value)=>{
        updateTodo(edit.id , value)
        setEdit({
            id:null,
            text:'',
        })
    }

    if(edit.id){ //якщо з батькового елемента повертається true тоді виконується код 
        return <TodoForm edit={edit} onSubmit={submitUpdate}/>
    }

    return values.map((todo,index)=>(
        <div key={index} className={todo.completed ? "todo-row completed" : "todo-row"}>
            <div onClick={()=> completedTask(todo.id)} key={todo.id}>
                <p className='todoItem'>{todo.valueText}</p>
            </div>
            <div className='icons'>
                    <img alt="icon" src={Edit} className='edit-icon icon' onClick={()=>setEdit({id :todo.id, text:todo.valueText})}/>
                    <img alt="icon" src={DeletIcon} className='delet-icon icon' onClick={()=>handleRemove(todo.id)}/>
                </div>
        </div>
    ))
}
export default TodoList