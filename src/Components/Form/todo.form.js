import React, {useState, useEffect , useRef} from 'react'
import './form.css'
function TodoForm({onSubmit, edit}) {
    const [inputVal , setInputVal] = useState(edit ? edit.value : '')
    const inputRef = useRef(null)

    useEffect(()=>{
        inputRef.current.focus()
    })

    const handleSubmit = (e) =>{
        e.preventDefault()

        onSubmit({
            id: Math.floor(Math.random()*10000),
            valueText: inputVal,
        })

        setInputVal('')
    }

    return (
        <div className="todoForm-wrapper">
            <form onSubmit={handleSubmit} className="input-group mb-3">
                {edit ? (
                    <>
                        <input type="text" value={inputVal} 
                        className="form-control customInput edit"
                        onChange={(e)=>{setInputVal(e.target.value)}} ref={inputRef}/>

                        <button id="button-addon1" className="btn btn-outline-secondary customBtn editBtn">Update</button>
                    </>
                ) : (
                    <>
                        <input type="text" value={inputVal} 
                        className="form-control customInput"
                        onChange={(e)=>{setInputVal(e.target.value)}} ref={inputRef}/>

                        <button id="button-addon1" className="btn btn-outline-secondary customBtn">Add</button>
                    </>
                )}
            </form>
        </div>
    )
}

export default TodoForm