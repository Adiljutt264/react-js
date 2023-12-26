import React, { useState, useEffect} from 'react'
import './Banner.css'
import Tasks from './Tasks';
const Banner = () => {
  const initialArray  = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
  const[tasks, setTasks] = useState(initialArray);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const taskSubmitHandler = (e) => {
    e.preventDefault();
    setTasks([...tasks, {title, description}]);
    setTitle('');
    setDescription('');
    
  };
  const deleteTask = (index) =>{
    const filterArray = tasks.filter((val, i)=>
    {
      return i !== index;
    });
    setTasks(filterArray);
  };
  useEffect(() => {
    localStorage.setItem("tasks" , JSON.stringify(tasks));
  }, [tasks]);
  
  return (
    <div className='banner'>
   <h1>Daily Tasks</h1>
    <form onSubmit={taskSubmitHandler}>
      <input type='text' placeholder='Title' value={title} onChange={(e)=> setTitle(e.target.value)}/>
      <textarea placeholder='Description' value={description} onChange={(e)=> setDescription(e.target.value)}></textarea>
      <button type='submit'> Add</button>
    </form>
    {tasks.map((item, index)=>
    <Tasks key={index} title={item.title} description={item.description} index={index} deleteTask={deleteTask}/>
    )}
    </div>
  )
}
export default Banner;