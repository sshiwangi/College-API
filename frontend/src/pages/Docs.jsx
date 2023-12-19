import React, {useState} from 'react'
import GettingStarted from '../components/GettingStarted';
import AllColleges from '../components/AllColleges'
import AllStates from '../components/AllStates'
import CollegesByStates from '../components/CollegesByStates'
import Contributing from '../components/Contributing'

function Docs() {
    const [selectedItem, setSelectedItem] = useState('gettingStarted');
    const [showAPIOptions, setShowAPIOptions] = useState(false);
 
    const handleItemClick = (item) => {
    setSelectedItem(item);

  };

    return (
    <div className='flex'>
     <div className=" z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidenav">
      <div className="overflow-y-auto py-5 px-5 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="space-y-2">
          <span onClick={() => handleItemClick('gettingStarted')} className={`cursor-pointer ${selectedItem === 'gettingStarted' ? 'text-white bg-gray-600 font-bold' : 'text-black hover:text-gray-700 focus:text-gray-700 focus:outline-none'} rounded-md px-3 py-2`}> Getting Started</span>
        </div>
        <div className="pt-5 space-y-2 " >
          <div onClick={() => {
  setShowAPIOptions(!showAPIOptions);
  handleItemClick('api');
}} className={`cursor-pointer ${selectedItem === 'api' ? 'text-white bg-gray-600 font-bold' : 'text-black hover:text-gray-700 focus:text-gray-700 focus:outline-none'} rounded-md px-3 py-2`}>API</div>
          {showAPIOptions && (
              <ul>
                <li onClick={() => handleItemClick('allStates')} className={`cursor-pointer ${selectedItem === 'allStates' ? 'text-white bg-gray-600 font-bold' : 'text-black hover:text-gray-700 focus:text-gray-700 focus:outline-none'} rounded-md px-3 py-2 my-3`}>All States</li>
                <li onClick={() => handleItemClick('allColleges')} className={`cursor-pointer ${selectedItem === 'allColleges' ? 'text-white bg-gray-600 font-bold' : 'text-black hover:text-gray-700 focus:text-gray-700 focus:outline-none'} rounded-md px-3 py-2 my-3`}>All Colleges</li>
                <li onClick={() => handleItemClick('collegesByStates')} className={`cursor-pointer ${selectedItem === 'collegesByStates' ? 'text-white bg-gray-600 font-bold' : 'text-black hover:text-gray-700 focus:text-gray-700 focus:outline-none'} rounded-md px-3 py-2 my-3`}>Colleges By States</li>
              </ul>
            )}
        </div>
        <div onClick={() => handleItemClick('contributing')} className={`cursor-pointer ${selectedItem === 'contributing' ? 'text-white bg-gray-600 font-bold' : 'text-black hover:text-gray-700 focus:text-gray-700 focus:outline-none'} rounded-md px-3 py-2 pt-5 space-y-2`}>
          Contributing
        </div>
      </div>
    </div>
    <div className='h-screen text-gray-900 w-full px-4 py-16'>
    {selectedItem === 'gettingStarted' && <GettingStarted />}
    {selectedItem === 'api' && <GettingStarted />}
        {selectedItem === 'allStates' && <AllStates />}
        {selectedItem === 'allColleges' && <AllColleges />}
        {selectedItem === 'collegesByStates' && <CollegesByStates />}
        {selectedItem === 'contributing' && <Contributing />}
    </div>
    </div>
  )
}

export default Docs