import React from 'react'

function AllStates() {
  return (
   <div>
      <h1 className='text-4xl font-bold'>Getting a List of All States</h1>
      <p className='mt-5 text-xl'>
        To retrieve a list of all states, make a GET request to the following API endpoint:
      </p>
      <code className='block bg-gray-100 p-2 mt-2 rounded-md'>https://college-api-p2wx.onrender.com/api/states</code>
      <p className='mt-5 text-xl'>
        The expected response, when the request returns with a status code of 200, will be a JSON array containing all the states.
      </p>
      <code className='block bg-gray-100 p-2 mt-2 rounded-md'>
        {"{allStates: [\n  \"State 1\",\n  \"State 2\",\n  \"State 3\",\n  ...\n]}"}
      </code>
    </div>
  )
}

export default AllStates