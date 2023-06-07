import React from 'react'

const Navbar = () => {
  return (
    <div className='flex'> 
     <div className='flex flex-col bg-white w-60 h-[850px] relative shadow-xl columns-4'>
        <ul>
        <h1 className='text-4xl mb-14 ml-5 font-bold italic mt-10 '>DEMO</h1>
            <li className='py-2'>
            <a href='to' className='active text-decoration-none p-10 text-lg text-green-600 font-semibold' >Current Request</a></li>
            <div className='border mt-2 w-48 text-center ml-4'/>
            <li className='py-2'>
            <a href='to' className='active text-decoration-none p-10 text-lg text-green-600 font-semibold'>Ongoing Stays</a></li>
            <div className='border mt-2 w-48 text-center ml-4'/>
            <li className='py-2'>
            <a href='to' className=' active text-decoration-none p-10 text-lg text-green-600 font-semibold'>Previous Stays</a></li>
            <div className='border mt-2 w-48 text-center ml-4'/>
            <li>
            <a href='to' className='text-decoration-none p-10 text-lg text-green-600 font-semibold'>Reports</a></li>
        </ul>
        <div className='mt-6 flex justify-center absolute top-[680px] left-9 text-white font-semibold text-xl'>
        <a className='py-3 px-12 bg-green-600 rounded-md ' href='to'>log-Out</a>
        
        </div>
        <p className='text-center absolute top-[760px] left-16 '>Help desk <br/>786-874 9988</p>
        
     </div>   
    
    </div>
  )
}

export default Navbar;