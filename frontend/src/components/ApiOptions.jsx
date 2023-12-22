import React from 'react';

function ApiOptions({ selectedItem, handleItemClick, showAPIOptions, setShowAPIOptions }) {
  const options = [
    { id: 'allStates', label: 'All States' },
    { id: 'allColleges', label: 'All Colleges' },
    { id: 'collegesByStates', label: 'Colleges By States' },
  ];
    return (
    <>
      <div onClick={() => {
        setShowAPIOptions(!showAPIOptions);
        handleItemClick('api');
      }} className={`cursor-pointer ${selectedItem === 'api' ? 'text-white bg-gray-600 font-bold' : 'text-black hover:text-gray-700 focus:text-gray-700 focus:outline-none'} rounded-md px-3 py-2`}>
        API
      </div>
      {showAPIOptions && (
        <ul>
          {options.map((option) => (
            <li
              key={option.id} // Use a unique key for each list item
              onClick={() => handleItemClick(option.id)}
              className={`cursor-pointer ${selectedItem === option.id
                ? 'text-white bg-gray-600 font-bold'
                : 'text-black hover:text-gray-700 focus:text-gray-700 focus:outline-none'} rounded-md px-3 py-2 my-3`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ApiOptions;
