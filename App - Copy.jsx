// import { useState } from 'react'
// import './App.css'
// import Car from './components/car.jsx'

// function App() {
//   const [topics] = useState([
//     "Basics",
//     "Single Page Application",
//     "Rendering",
//     "DOM & Virtual DOM",
//     "JSX",
//     "State & Rendering (Counter Example)"
//   ])

//   return (
//     <>
//       <h1>React Tutorial</h1>

//       <div className="card">
//         <h2>Topics</h2>
//         <ul>
//           {topics.map((topic, index) => (
//             <li key={index}>{topic}</li>
//           ))}
//         </ul>

//         <div className="counter">
//           <h3>Counter Example</h3>
//           < Car brand="ford" model="Mustang" color="red"/>
//           <Counter />
//         </div>
//       </div>
//     </>
//   )
// }

// // separate counter component
// function Counter() {
//   const [count, setCount] = useState(0)
//   return (
//     <button onClick={() => setCount(count + 1)}>
//       Count is {count}
//     </button>
    
//   )
// }





// export default App







// import React from "react";
// import Navbar  from "./navbar";
// // import "./navbar.css";

// function navbar() {
//   return (
//   <div>

//   <Navbar />
//   <h2>Welcome to my website</h2>
//   </div>
  
//   );
// }

// export default navbar;

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from "./components/MainLayout.jsx";
import Login from './pages/Login.jsx';
import Registration from './pages/Registration.jsx';
import Dashboard from './pages/Dashboard.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
