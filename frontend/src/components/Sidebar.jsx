import React from 'react'
import ApiOptions from './ApiOptions';

function Sidebar({ selectedItem, handleItemClick, showAPIOptions, setShowAPIOptions }) {
  return (
    <div className="hidden sm:block z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidenav">
      <div className="overflow-y-auto py-5 px-5 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 ">
        <div className="space-y-2">
          <span onClick={() => handleItemClick('gettingStarted')} className={`cursor-pointer ${selectedItem === 'gettingStarted' ? 'text-white bg-gray-600 font-bold' : 'text-black hover:text-gray-700 focus:text-gray-700 focus:outline-none'} rounded-md px-3 py-2`}> Getting Started</span>
        </div>
        <div className="pt-5 space-y-2 " >
          <ApiOptions
          selectedItem={selectedItem}
          handleItemClick={handleItemClick}
          showAPIOptions={showAPIOptions}
          setShowAPIOptions={setShowAPIOptions}
        />
        </div>
        <div onClick={() => handleItemClick('contributing')} className={`cursor-pointer ${selectedItem === 'contributing' ? 'text-white bg-gray-600 font-bold' : 'text-black hover:text-gray-700 focus:text-gray-700 focus:outline-none'} rounded-md px-3 py-2 pt-5 space-y-2`}>
          Contributing
        </div>
      </div>
    </div>
  )
}

export default Sidebar
