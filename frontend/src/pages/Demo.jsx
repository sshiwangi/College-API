import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Demo() {
  const [states, setStates] = useState([]);
  const [colleges, setColleges] = useState([]);
  const [selectedState, setSelectedState] = useState('');

  useEffect(() => {
    async function fetchStates() {
      try {
        const response = await axios.get('http://localhost:8000/api/states');
        setStates(response.data.allStates);
      } catch (error) {
        console.log('Error fetching states:', error);
      }
    }
    fetchStates();
  }, []);

  async function fetchCollegesByState(state) {
    try {
      const response = await axios.get('http://localhost:8000/api/colleges', {
        params: {state} //pass selected state as a query parameter
      });
      setColleges(response.data.allCollege);
    } catch (error) {
      console.error('Error fetching colleges:', error);
    }
  }

  return (
    <div className="lg:flex h-screen justify-center mt-20 p-10">
        <div className="lg:mr-5">
     <label htmlFor="state" className="mb-2" >Choose a State:</label>
     <div className='mt-2'>
      <select name="state" value = {selectedState} onChange={(event) => {
        setSelectedState(event.target.value);
        fetchCollegesByState(event.target.value);
      }}>
        <option value="">Select a State</option>
        {states.map((state) => (
          <option key={state._id} value={state.name}>
            {state.name}
          </option>
        ))}
      </select>
      </div>
      </div>

       <div className='lg:ml-5'>
      <label htmlFor="college mb-2">Choose a College:</label>
      <div className='mt-2'>

      <select name="college" id="college">
        <option value="">Select a College</option>
      {colleges.map(college => (
          <option key={college._id} value={college.name}>
          {college.name}
        </option>
        ))}
      </select>
      </div>
      </div>
    </div>
  );
}

export default Demo;
