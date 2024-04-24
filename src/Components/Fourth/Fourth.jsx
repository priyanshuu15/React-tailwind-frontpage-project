import React from 'react';
import './Fourth.css';
import '../../Assets/Header.output.css';
import CardOne from '../../Assets/Card-1.jpg'
import CardTwo from '../../Assets/Card-2.jpg'
import CardThree from '../../Assets/Card-3.jpg'
import Github from '../../Assets/github.webp'
import www from '../../Assets/www-logo.png'
const Fourth = () => {
  return (
    <>
    <h1 className='font-medium ml-24 text-3xl'>Web Creations</h1>
    <hr className='w-10/12 ml-24 mt-8'/>
    <div className="cards mt-12 ml-24">
        
    <div class="max-w-xs rounded overflow-hidden shadow-lg ">
  <img class="w-full" src={CardOne} alt="Card image"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">First Project</div>
    <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ratione tempore, reprehenderit culpa perferendis debitis molestias nam, consectetur sapiente atque aspernatur id rem et. Unde!</p>
  </div>
  <div className="logos">
  <img src={www} alt="" className="w-6 ml-6"/>
  <img src={Github} alt="" className="w-6 ml-3"/>
  </div>
</div>
    <div class="max-w-xs rounded overflow-hidden shadow-lg ml-8">
  <img class="w-full" src={CardTwo} alt="Card image"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Second Project</div>
    <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ratione tempore, reprehenderit culpa perferendis debitis molestias nam, consectetur sapiente atque aspernatur id rem et. Unde!</p>
  </div>
  <div className="logos">
  <img src={www} alt="" className="w-6 ml-6"/>
  <img src={Github} alt="" className="w-6 ml-3"/>
  </div>
</div>
    <div class="max-w-xs rounded overflow-hidden shadow-lg ml-8">
  <img class="w-full" src={CardThree} alt="Card image"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Third Project</div>
    <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ratione tempore, reprehenderit culpa perferendis debitis molestias nam, consectetur sapiente atque aspernatur id rem et. Unde!</p>
  </div>
  <div className="logos">
  <img src={www} alt="" className="w-6 ml-6"/>
  <img src={Github} alt="" className="w-6 ml-3"/>
  </div>
  
</div>
</div>
</>
  )
}

export default Fourth
