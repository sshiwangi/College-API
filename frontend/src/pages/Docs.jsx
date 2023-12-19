import React, {useState} from 'react'

function Docs() {
    const [showAPIOptions, setShowAPIOptions] = useState(false);
  return (
    <div className='flex'>
     <div className=" z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidenav">
      <div className="overflow-y-auto py-5 px-5 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="space-y-2">
          Getting Started
        </div>
        <div className="pt-5 space-y-2 " onClick={() => setShowAPIOptions(!showAPIOptions)}>
          API
          {showAPIOptions && (
              <ul>
                <li className='my-3' >All States</li>
                <li className='my-3'>All Colleges</li>
                <li className='my-3'>Colleges By States</li>
              </ul>
            )}
        </div>
        <div className="pt-5 space-y-2">
          Contributing
        </div>
      </div>
    </div>
    <div className='h-screen text-gray-900 w-full px-4 py-16'>
<h1 className='text-4xl font-bold'>Getting Started</h1>
<h2 className='mt-5 text-2xl'>Welcome to the College API! This API provides information about undergraduate engineering colleges in India approved by the All India Council for Technical Education (AICTE), including details about their respective states.</h2>
    </div>
    </div>
  )
}

export default Docs