import React, { useState } from 'react';
import './App.css';

function App() {
  const [teamMembers] = useState([]);

  return (
    <div className="App">
      {teamMembers}
    </div>
  );
}

export default App;