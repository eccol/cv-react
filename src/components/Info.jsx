import { useState } from 'react';

export default function Info({ editMode }) {
  const [info, setInfo] = useState({ firstname: '', lastname: '' });

  function updateInfo(field, value) {
    setInfo({ ...info, [field]: value });
  }

  const fields = [
    { fieldName: 'firstname', title: 'First Name' },
    { fieldName: 'lastname', title: 'Last Name' },
  ];

  const fieldForms = fields.map(({ fieldName, title }) => {
    return (
      <div className="form-item" key={fieldName}>
        <label htmlFor={fieldName}>{title}</label>
        {editMode ? (
          <input
            type="text"
            name={fieldName}
            id={fieldName}
            value={info[fieldName]}
            onInput={(e) => {
              updateInfo(e.target.name, e.target.value);
            }}
          ></input>
        ) : (
          <p>{info[fieldName]}</p>
        )}
      </div>
    );
  });

  return (
    <div className="info">
      <h1>Info</h1>
      {fieldForms}
    </div>
  );
}
