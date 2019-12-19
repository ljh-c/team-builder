import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import MemberCard from './MemberCard';

function App() {
  const [roster, setRoster] = useState([{
    name: 'Lillian',
    email: 'moo',
    role: 'Frontend Engineer',
    isAdmin: false
  }]);

  const [memberData, setMemberData] = useState({
    name: '', 
    email: '', 
    role: '', 
    isAdmin: false
  });

  const [memberToEdit, setMemberToEdit] = useState({});
  
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    if (!isEditing) {
      setRoster([...roster, memberData]);
      console.log('not editing!');
    }
    
    if (isEditing) {
      editMember();
    }

    setMemberData({
      name: '', 
      email: '', 
      role: '', 
      isAdmin: false
    });
    setMemberToEdit({});
    setIsEditing(false);
  };

  const editMember = () => {
    setMemberData({
      ...memberData,
      name: memberToEdit.name,
      email: memberToEdit.email,
      role: memberToEdit.role,
      isAdmin: memberToEdit.isAdmin
    });
    

    let newRos = roster.map(member => {
      if (member.name === memberToEdit.name) {
        console.log('I found the edited member');
        return memberData;
      } else {
        return member;
      }
    });

    setRoster(newRos);
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
          <MemberCard key={index} member={member} setMemberToEdit={setMemberToEdit} isEditing={isEditing} setIsEditing={setIsEditing} />
        );
      })}
    </div>
  );
}

export default App;