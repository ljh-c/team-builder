import React, { useState } from 'react';
import './App.css';
import Form from './Form';

function App() {
  const [roster, setRoster] = useState([]);

  const [memberData, setMemberData] = useState({
    name: '', 
    password: '', 
    role: '', 
    isAdmin: false
  });

  const handleSubmit = event => {
    event.preventDefault();
    setRoster([...roster, memberData]);
      
  };

  return (
    <div className="App">
      <h1>Add Team Member</h1>
      <Form memberData={memberData} setMemberData={setMemberData} handleSubmit={handleSubmit} />
      <h2>Team</h2>
      {roster.map((member, index) => {
        return (
          <div key={index}>
            <p>{member.name}</p>
            <p>{member.password}</p>
            <p>{member.role}</p>
            {member.hasOwnProperty('isAdmin') ? <p>admin</p> : null}
          </div>
        );
      })}
    </div>
  );
}

export default App;