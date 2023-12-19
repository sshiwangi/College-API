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
          <span onClick={() => handleItemClick('gettingStarted')}>Getting Started</span>
        </div>
        <div className="pt-5 space-y-2 " >
          <div onClick={() => setShowAPIOptions(!showAPIOptions)}>API</div>
          {showAPIOptions && (
              <ul>
                <li onClick={() => handleItemClick('allStates')}>All States</li>
                <li onClick={() => handleItemClick('allColleges')}>All Colleges</li>
                <li onClick={() => handleItemClick('collegesByStates')}>Colleges By States</li>
              </ul>
            )}
        </div>
        <div className="pt-5 space-y-2" onClick={() => handleItemClick('contributing')}>
          Contributing
        </div>
      </div>
    </div>
    <div className='h-screen text-gray-900 w-full px-4 py-16'>
    {selectedItem === 'gettingStarted' && <GettingStarted />}
        {selectedItem === 'allStates' && <AllStates />}
        {selectedItem === 'allColleges' && <AllColleges />}
        {selectedItem === 'collegesByStates' && <CollegesByStates />}
        {selectedItem === 'contributing' && <Contributing />}
    </div>
    </div>
  )
}

export default Docs