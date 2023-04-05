import React, { useState} from 'react'
import TodoForm from '../Form/todo.form';
import TodoList from '../List/todo.list';
import './todo.main.css'
import {useDispatch} from 'react-redux'


function TodoMain() {
    const [values, setValue] = useState([])

    const dispatch = useDispatch()

    // [localStorage.getItem("items") !== undefined ? localStorage.getItem("items") : data]
    // const data = () =>{
    //     localStorage.setItem("items",[])
    //     return []
    // }

    const inputSubmit = (incomingValue) =>{
        // || /^\s*$/.test(incomingValue.valueText)
        if(!incomingValue.valueText){
            return;
        }
        const newTodos = [incomingValue, ...values]

        setValue(newTodos)
        dispatch({
            type:"ADD_TODO",
            payload:{
                valueText: incomingValue,
            }
        })
    }

    const updateTodo = (todoId, newValue) =>{
        if(!newValue.valueText){
            return;
        }

        setValue( prev => prev.map(item => (item.id === todoId ? newValue : item))) // якщо в item.id хнаходиться id який прийшов , тоді додаємо новий текст
    }

    const handleRemove = (id) =>{
        const removeArr = [...values].filter((value) => value.id !== id) // порівнюж кожний value.id з id який прийшов з todoList , елемент з id який прийшо не добавляється в масив
        setValue(removeArr)
        dispatch({
            type:"DELET_TODO",
            payload:{
                valueText:"",
            }
        })
    }

    const completedTask = (id) =>{
        let updatedValues = values.map((todo) => {
            if(todo.id === id){  // якщо id буде відповідати натиснотому todo.id тоді змінюється клас на completed = true/false
                todo.completed = !todo.completed
            }
            return todo
        })
        setValue(updatedValues)
    }


    return (
        <div className='todoMain-container'>
            <div className='title-box'>
                <h1 className='title'>What's plans for today ?</h1>
            </div>
            <TodoForm onSubmit={inputSubmit}/>
            <TodoList values={values} handleRemove={handleRemove} completedTask={completedTask}
            updateTodo={updateTodo}
            />
        </div>
    )
}

export default TodoMain;