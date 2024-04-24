import React from 'react'
import './Third.css'
import '../../Assets/Header.output.css';
import ComputerBoy from '../../Assets/computeruse.webp'

const Third = () => {
  return (
    <div className="coffee">
    <img src={ComputerBoy} alt="" className='mt-12'/>
    <div className="coffee-text mt-32">
    <h1 className='font-semibold text-2xl '>Code and Coffee</h1>
    <hr className='w-4/5 mt-4'/>
    <p className='mr-32 mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aliquam magnam dolorem ratione nemo voluptate assumenda. Earum assumenda culpa deleniti doloribus obcaecati! Sunt rerum neque nisi nesciunt saepe omnis dignissimos eum molestiae tempore, sit cum excepturi a quisquam. Reprehenderit tempora ducimus consectetur, aperiam sequi veniam.</p>
    </div>
    
    </div>
  )
}

export default Third
