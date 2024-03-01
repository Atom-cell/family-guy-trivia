import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className=" flex justify-between items-center h-20  border-b border-slate-700 ">
        {/* <div className=" "> */}
            <h2>Family Guy</h2>
            <button className='bg-green-500 text-black px-4 py-2 font-bold rounded-lg'><h4>Take Quiz</h4></button>
        {/* </div> */}
    </div>
  )
}

export default Navbar