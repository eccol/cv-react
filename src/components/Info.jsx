import { useState } from 'react';

export default function Info({ editMode }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function changeFirstName(e) {
    setFirstName(e.target.value);
  }

  function changeLastName(e) {
    setLastName(e.target.value);
  }

  return (
    <div className="info">
      <h1>Info</h1>
      <label htmlFor="firstname">First Name</label>
      {editMode ? (
        <input
          type="text"
          name="firstname"
          id="firstname"
          onInput={changeFirstName}
        />
      ) : (
        <p>{firstName}</p>
      )}
      <label htmlFor="lastname">Last Name</label>
      {editMode ? (
        <input
          type="text"
          name="lastname"
          id="lastname"
          onInput={changeLastName}
        />
      ) : (
        <p>{lastName}</p>
      )}
    </div>
  );
}
