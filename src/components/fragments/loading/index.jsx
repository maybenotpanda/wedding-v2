// ** React Imports
import React from 'react'

const Loading = () => {
  return (
    <div className='flex'>
      <div
        className="w-3/5 h-screen bg-background hidden lg:block"
      />
      <div className="bg-background lg:w-2/5 h-screen w-screen  grid content-between py-28 px-4">
        <div className="grid gap-4 justify-items-center content-between">
          <div className="w-24 h-3 bg-gray-400 rounded-full"></div>
          <div className="w-40 h-5 bg-gray-400 rounded-full"></div>
        </div>
        <div className="grid inset-x-0 justify-items-center z-50 gap-3">
          <div className="w-24 h-3 bg-gray-400 rounded-full"></div>
          <div className="w-full h-12 bg-gray-400 rounded-full"></div>
          <div className="w-60 h-[3rem] bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export default Loading