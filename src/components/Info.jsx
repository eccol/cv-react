import { useState } from 'react';
import '../styles/Info.css';

export default function Info({ editMode }) {
  const fields = [
    { fieldName: 'firstname', title: 'First Name', type: 'text' },
    { fieldName: 'lastname', title: 'Last Name', type: 'text' },
    { fieldName: 'email', title: 'Email Address', type: 'email' },
    { fieldName: 'telephone', title: 'Phone Number', type: 'tel' },
  ];

  // Initialize every field as an empty string to
  // prevent React's controlled/uncontrolled error
  const [info, setInfo] = useState(
    fields.reduce((defaultObject, field) => {
      defaultObject[field.fieldName] = '';
      return defaultObject;
    }, {}),
  );

  function updateInfo(field, value) {
    setInfo({ ...info, [field]: value });
  }

  const fieldForms = fields.map(({ fieldName, title, type }) => {
    return (
      <div className="form-item" key={fieldName}>
        <label htmlFor={fieldName}>{title}</label>
        {editMode ? (
          <input
            type={type}
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
