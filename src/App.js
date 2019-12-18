import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import MemberCard from './MemberCard';

function App() {
  const [roster, setRoster] = useState([{
    name: 'Lillian',
    password: 'moo',
    role: 'Frontend Engineer'
  }]);

  const [memberData, setMemberData] = useState({
    name: '', 
    password: '', 
    role: '', 
    isAdmin: false
  });

  const [memberToEdit, setMemberToEdit] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    if (!isEditing) {
      setRoster([...roster, memberData]);
    }
    setMemberData({
      name: '', 
      password: '', 
      role: '', 
      isAdmin: false
    });
    setMemberToEdit({});
    setIsEditing(false);
  };

  return (
    <div className="App">
      <h1>Add Team Member</h1>
      <Form 
        memberData={memberData} 
        setMemberData={setMemberData} 
        handleSubmit={handleSubmit} 
        memberToEdit={memberToEdit} 
      />
      <h2>Team</h2>
      {roster.map((member, index) => {
        return (
          <MemberCard key={index} member={member} setMemberToEdit={setMemberToEdit} setIsEditing={setIsEditing} />
        );
      })}
    </div>
  );
}

export default App;