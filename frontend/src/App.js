import "./App.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [states, setStates] = useState([]);
  const [colleges, setColleges] = useState([]);
  const [selectedState, setSelectedState] = useState('');

  useEffect(() => {
    // async function fetchColleges() {
    //   try {
    //     const response = await axios.get('http://localhost:8000/api/colleges');
    //     setColleges(response.data.allCollege);
    //   } catch (error) {
    //     console.error('Error fetching colleges:', error);
    //   }
    // }
    
    // fetchColleges();
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
    <div className="App">

      <select value = {selectedState} onChange={(event) => {
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
      <label for="college">Choose a College:</label>

      <select name="college" id="college">
        <option value="">Select a College</option>
      {colleges.map(college => (
          <option key={college._id} value={college.name}>
          {college.name}
        </option>
        ))}
      </select>
    </div>
  );
}

export default App;
