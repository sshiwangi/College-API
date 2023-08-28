import "./App.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    async function fetchColleges() {
      try {
        const response = await axios.get('http://localhost:8000/api/colleges');
        setColleges(response.data.allCollege);
      } catch (error) {
        console.error('Error fetching colleges:', error);
      }
    }
    
    fetchColleges();
  }, []);

  return (
    <div className="App">
      <label for="college">Choose a College:</label>

      <select name="college" id="college">
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
