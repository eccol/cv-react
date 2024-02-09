import { useState } from 'react';

export default function Info({ editMode }) {
  const [info, setInfo] = useState({ firstname: '', lastname: '' });

  function updateInfo(field, value) {
    setInfo({ ...info, [field]: value });
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
          value={info.firstname}
          onInput={(e) => {
            updateInfo(e.target.name, e.target.value);
          }}
        />
      ) : (
        <p>{info.firstname}</p>
      )}
      <label htmlFor="lastname">Last Name</label>
      {editMode ? (
        <input
          type="text"
          name="lastname"
          id="lastname"
          value={info.lastname}
          onInput={(e) => {
            updateInfo(e.target.name, e.target.value);
          }}
        />
      ) : (
        <p>{info.lastname}</p>
      )}
    </div>
  );
}
