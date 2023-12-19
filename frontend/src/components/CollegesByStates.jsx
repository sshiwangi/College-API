import React from 'react'

function CollegesByStates() {
  return (
    <div>
      <h1 className='text-4xl font-bold'>Getting Colleges by State</h1>
      <p className='mt-5 text-xl'>
        To retrieve a list of colleges based on a specific state, make a GET request to the following API endpoint by appending the state parameter:
      </p>
      <code className='block bg-gray-100 p-2 mt-2 rounded-md'>https://college-api-p2wx.onrender.com/api/colleges?state=state_name</code>
      <p className='mt-5 text-xl'>
        Replace `state_name` in the URL with the actual name of the state you are interested in.
      </p>
      <p className='mt-5 text-xl'>
        The expected response, when the request returns with a status code of 200, will be a JSON array containing colleges for the specified state.
      </p>
      <code className='block bg-gray-100 p-2 mt-2 rounded-md'>
        {"{ allCollege: [\n  {_id: 1, name: 'College 1', state: 'state_name'},\n  {_id: 2, name: 'College 2', state: 'state_name'},\n  ...\n]}"}
      </code>
    </div>
  )
}

export default CollegesByStates