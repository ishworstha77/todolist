// import { useState, useEffect } from "react";
// import "./App.css";

// function App() {
//   const [task, settask] = useState(window.localStorage.getItem("task", "task"));

//   useEffect(() => {
//     window.localStorage.setItem("task", settask);
//   }, [task]);

//   return (
//     <div>
//       <input
//         onChange={(e) => {
//           settask(e.currentTarget.value);
//         }}
//       />
//       {task}
//     </div>
//   );
// }

// export default App;


import React from 'react'
import Todo from './component/todo';
const App=()=>{
  return(
    <div>
    <Todo/>
    </div>
  
    // // <div>
    // // <div className='main-div'>
    // // <div className='child-div'>
    // // <div className="add-item">
    // // <input type="text" placeholder='Add item 👌'className='form-control' />
    // // <button onChange={}>Add item</button>
    // // </div>
    // // </div>
    // // </div>

    // </div>
  )
}
export default App;
  
  
  