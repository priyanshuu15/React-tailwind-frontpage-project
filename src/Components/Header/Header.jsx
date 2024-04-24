import React from 'react'
import './Header.css';
import Github from "../../Assets/github.webp";
import Linkedin from "../../Assets/linkedin logo.svg"
import Twitter from "../../Assets/twitter-logo.svg"
import WebDev from "../../Assets/web-dev.webp"
function Header() {
    return (
        <div className="header bg-green-300 w-full ">
            <div className="title text-2xl font-bold mx-20  flex">
                <span>Web</span>
                <span className='text-emerald-600'>Dev</span>
            </div>
            <div className="List">
                <ul className='list-none flex space-x-4 font-medium'>
                    <li className='space-x-4'>Home</li>
                    <li className='space-x-4'>Skills</li>
                    <li className='space-x-4'>About</li>
                    <li className='space-x-4'>Projects</li>
                </ul>
            </div>
            <div className="name flex flex-col absolute font-sans ">
                <span className='text-7xl font-semibold'>I'm John</span>
                <span className='text-2xl font-semibold'>Front-End Developer</span>
                <span className='font-normal'>Turning Ideas into interactive reality</span>
                <span className='image'>
                    <img src={Github} alt="" className='w-10'/>
                    <img src={Linkedin} alt="" className='w-7' />
                    <img src={Twitter} alt="" className='w-10'/>
                </span>
            </div>
            <div className="sideimg ">
                <img src={WebDev} alt=""  />
            </div>
        </div>
    );
}

export default Header
