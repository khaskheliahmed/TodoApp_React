import { useState , useRef } from 'react'

import './App.css'

function App() {
 
         
  const userInput = useRef();
  const [todo, setTodo] = useState([]);

  const addTodo = () => {
    console.log(userInput.current.value);
    todo.push(userInput.current.value);
    setTodo([...todo])
    console.log(todo);
    userInput.current.value = ''
  }

  const deleteTodo = (index) => {
    console.log('todo deleted', index);
    todo.splice(index , 1);
    setTodo([...todo]) 
  }

  const editTodo = (index )=>{
    const updatedValue = prompt('enter updated value');
    todo.splice(index , 1 , updatedValue);
    setTodo([...todo])


    }

  return (
    <>

    <div className='w-full max-w-md mx-auto shadow-lg shadow-teal-300 rounded-2xl px-4 py-3 my-8 text-orange-500 bg-gray-800'>
    <h1 className='text-4xl text-center font-serif text-white my-3  ' >Todo_List</h1>
       
       <div className='flex shadow rounded-lg overflow-hidden mb-4'>
       <input type="text" className='outline-none w-full py-1 px-3 ' placeholder="enter todo" ref={userInput} />

       <button onClick={addTodo} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition duration-300'>AddTodo</button>
       </div>

     
      
      <ul>
        {todo.map((item, index) => {
          return <li key={index }>{item }
          <div className='flex justify-end items-center'>
          <button className=  'bg-yellow-400  hover:bg-yellow-600 font-serif text-white font-semibold py-1 px-3 rounded shadow-md transform hover:scale-105 transition duration-300 gap-1' onClick={() => deleteTodo(index)}>Delete</button>
          <button className='bg-red-500 hover:bg-red-700 gap-3 font-serif text-white font-semibold py-1 px-3 rounded shadow-md transform hover:scale-105 transition duration-300' onClick={()=>editTodo(index)}>Edit</button>
          
          </div>
           
          </li>
        })}
      </ul>
    </div>
       
    </>
  )
}

export default App
