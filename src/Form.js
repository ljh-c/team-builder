import React, { useEffect } from 'react';

function Form({ 
    memberData, setMemberData, 
    handleSubmit, memberToEdit 
  }) {

  useEffect(() => {
    setMemberData({...memberToEdit});
  }, [memberToEdit]);

  const handleInputChange = event => {
    setMemberData({
      ...memberData, 
      [event.target.name]: event.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name: <input 
          type="text" 
          placeholder="first name"
          name="name" 
          onChange={handleInputChange} 
          value={memberData.name}/>
      </label>

      <label>
        Password: <input 
          type="text" 
          name="password" 
          onChange={handleInputChange} 
          value={memberData.password}/>
      </label>

      <label>
        Role: <select 
            name="role" 
            onChange={handleInputChange}
            value={memberData.role}>
          <option>Frontend Engineer</option>
          <option>Backend Engineer</option>
          <option>UX Designer</option>
          <option>Data Scientist</option>
        </select>
      </label>

      <label>
        Admin: <input type="checkbox" name="isAdmin" checked={memberData.checked} onChange={handleInputChange} value={memberData.isAdmin}/>
      </label>

      <button>Submit</button>
    </form>
  );
}

export default Form;