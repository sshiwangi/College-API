import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
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
      <Sidebar selectedItem={selectedItem} handleItemClick={handleItemClick} showAPIOptions={showAPIOptions} setShowAPIOptions={setShowAPIOptions} />
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