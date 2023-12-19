import React from 'react'

function AllColleges() {
  return (
    <div>
      <h1 className='text-4xl font-bold'>Getting a List of All Colleges</h1>
      <p className='mt-5 text-xl'>
        To retrieve a list of all colleges, make a GET request to the following API endpoint:
      </p>
      <code className='block bg-gray-100 p-2 mt-2 rounded-md'>https://college-api-p2wx.onrender.com/api/colleges</code>
      <p className='mt-5 text-xl'>
        The expected response, when the request returns with a status code of 200, will be a JSON array containing all the states.
      </p>
      <code className='block bg-gray-100 p-2 mt-2 rounded-md'>
        {"{allCollege: [\n  \"{_id:1 , name: College 1,state: State 1}\",\"{_id:2 ,name : College 2, state : State 2}\"\n]}"}
      </code>
    </div>
  )
}

export default AllColleges