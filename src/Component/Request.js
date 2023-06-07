import React from 'react'
import Vector from './Vector.png'

const Request = () => {
    return (
        <div className='flex bg-[#D9D9D9] columns-8 w-11/12 flex-col'>
            <div className='mt-16 ml-24 text-3xl text-green-600 font-semibold'>
                <h1>You currently  have 3 requests</h1>
            </div>
            <div className='flex justify-between bg-white mx-6 px-10 py-10 flex-row mt-10'>
                <div className='border-r-2 border-gray-400 border-solid w-1/3 pl-2'>
                    <p className='text-green-600 font-semibold text-xl'>St Judes Hospital</p> <br />
                    <p className='text-[#959595]'>Sarasota,FL. 33178</p>
                </div>
                <div className='border-r-2 border-gray-400 border-solid w-1/3 pl-2'>
                    <p className='text-green-600 font-semibold'>10 - 17</p> <br />
                    <p className='text-[#959595]'>October December</p>
                </div>
                <div className=' w-1/3 pr-0 pl-2 mt-0 pt-0 '>
                    <p className='mt-0 pt-0 text-green-600 font-semibold'>20 Rooms</p> <br />
                    <p className='text-[#959595] mt-0 pt-0'>10 Singles, 10 doubles</p>
                </div>
            </div>
            <div className='flex justify-center bg-white mx-6 px-10 pb-5 flex-row'>
                <div className='border rounded-sm px-36 py-4 rounded-l-[50px] bg-[#FDF307]'>RECIEVED</div>
                <div className='border rounded-sm px-36 py-4'>NEGOTIATING</div>
                <div className='border rounded-sm px-36 py-4 rounded-r-[50px] '>COMPLETED</div>
            </div>
            {/* Second COlumn */}
            <div className='flex justify-between bg-white mx-6 px-10 py-10 flex-row mt-10 rounded-t-[80px] '>
                <div className='border-r-2 border-gray-400 border-solid w-1/3 pl-2'>
                    <p className='text-green-600 font-semibold text-xl'>St Judes Hospital</p> <br />
                    <p className='text-[#959595]'>Sarasota,FL. 33178</p>
                </div>
                <div className='border-r-2 border-gray-400 border-solid w-1/3 pl-2'>
                    <p className='text-green-600 font-semibold'>10 - 17</p> <br />
                    <p className='text-[#959595]'>October December</p>
                </div>
                <div className=' w-1/3 pr-0 pl-2 mt-0 pt-0 '>
                    <p className='mt-0 pt-0 text-green-600 font-semibold'>20 Rooms</p> <br />
                    <p className='text-[#959595] mt-0 pt-0'>10 Singles, 10 doubles</p>
                </div>
            </div>
            <div className='flex bg-white mx-6 px-10 pb-5 flex-row'>
                <a className='mt-0  text-white font-semibold bg-green-600 w-1/2 pt-3 pb-3 rounded-[40px] pl-4' href='to'>COMPLETED</a>
            </div>
            <div className='flex flex-row mx-6 pb-5 bg-white justify-around mb-3 rounded-b-[80px] gap-24'>
                <div className='px-14 py-10 bg-[#F5F4F4] w-1/3 ml-10'>
                    <img src={Vector} alt='nothing' className='mx-auto' />
                    <h1 className='text-green-600 text-2xl text-center'>Holiday Inn</h1>
                    <div className='flex flex-col justify-around w-100 mt-4 shadow-xl py-6 px-12 relative'>
                        <p className=' mt-2'>1.5 miles away from joblocation. </p>
                        <span className='block mt-4'>Singles:$50</span>
                        <span className='block'>Doubles:$100</span>
                        <a href="to" className='p-2 rounded-xl  bg-green-600 mt-3 w-24 absolute top-24 left-[160px] '>Book Now</a>
                    </div>
                </div>
                <div className='px-14 py-10 bg-[#F5F4F4] w-1/3'>
                    <img src={Vector} alt='nothing' className='mx-auto' />
                    <h1 className='text-green-600 text-2xl text-center'>Holiday Inn</h1>
                    <div className='flex flex-col justify-around w-100 mt-4 shadow-xl py-6 px-12 relative'>
                        <p className='block mt-2'>1.5 miles away from joblocation. </p>
                        <span className='block mt-4'>Singles:$50</span>
                        <span className='block'>Doubles:$100</span>
                        <a href="to" className='p-2 rounded-xl  bg-green-600 mt-3 w-24 absolute top-24 left-[160px] '>Book Now</a>
                    </div>
                </div>
                <div className='px-14 py-10 bg-[#F5F4F4] w-1/3 mr-10'>
                    <img src={Vector} alt='nothing' className='mx-auto' />
                    <h1 className='text-green-600 text-2xl text-center'>Holiday Inn</h1>
                    <div className='flex flex-col justify-around w-100 mt-4 shadow-xl py-6 px-12 relative'>
                        <p className=' mt-2'>1.5 miles away from joblocation. </p>
                        <span className='block mt-4'>Singles:$50</span>
                        <span className='block'>Doubles:$100</span>
                        <a href="to" className='p-2 rounded-xl  bg-green-600 mt-3 w-24 absolute top-24 left-[160px] '>Book Now</a>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Request