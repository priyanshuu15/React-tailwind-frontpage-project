import React from 'react'
import '../../Assets/Header.output.css';
import './Second.css'
import HTML from '../../Assets/html-logo.svg'
import JS from '../../Assets/javascript-logo.svg'
import react from '../../Assets/react-logo.svg'
const Second = () => {
  return (
    <div className="tech">
        <div className="titlee  text-2xl font-bold mx-20 my-20">
        TECH STACK
    </div>
    <hr className='w-4/5 ml-20 h-3.5'/>
    <div className="card ">
     <div className="card-l">
        <img src={HTML} alt="" className='w-20 imgg' />
        <h2>HTML & CSS</h2>
        <p>Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.</p>
     </div>
     <div className="card-m">
        <img src={JS} alt="" className='w-20 imgg'/>
        <h2>Javascript</h2>
        <p>Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality</p>  
     </div>
     <div className="card-r">
        <img src={react} alt="" className='w-20 imgg'/>
        <h2>React</h2>
        <p>Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.</p>
     </div>
    </div>
    </div>
  )
}

export default Second
