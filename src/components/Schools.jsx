import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export default function Schools({ editMode }) {
  const [schools, setSchools] = useState([]);

  function addSchool() {
    const id = uuid();
    const newSchool = {
      name: 'School University',
      years: '2010-2015',
      major: 'Dance',
      id: id,
    };
    setSchools([...schools, newSchool]);
  }

  function removeSchool(schoolID) {
    const updatedSchools = schools.filter((school) => school.id !== schoolID);
    setSchools(updatedSchools);
  }

  function updateSchool(schoolID, field, value) {
    const updatedSchools = schools.map((school) => {
      if (school.id !== schoolID) return school;
      return { ...school, [field]: value };
    });
    setSchools(updatedSchools);
  }

  const schoolList = schools.map((school) => {
    return (
      <div className="school" key={school.id}>
        <label htmlFor="name">School</label>
        {editMode ? (
          <input
            id="school-name"
            name="name"
            value={school.name}
            onInput={(e) => updateSchool(school.id, 'name', e.target.value)}
          />
        ) : (
          <p>{school.name}</p>
        )}
        <label htmlFor="years">Years Attended</label>
        {editMode ? (
          <input
            id="years-attended"
            name="years"
            value={school.years}
            onInput={(e) => updateSchool(school.id, 'years', e.target.value)}
          />
        ) : (
          <p>{school.years}</p>
        )}
        <label htmlFor="major">Area of Study</label>
        {editMode ? (
          <input
            id="major"
            name="major"
            value={school.major}
            onInput={(e) => updateSchool(school.id, 'major', e.target.value)}
          />
        ) : (
          <p>{school.major}</p>
        )}
        {editMode ? (
          <button type="button" onClick={() => removeSchool(school.id)}>
            Remove
          </button>
        ) : null}
      </div>
    );
  });

  return (
    <div className="education">
      <h1>Education</h1>
      {schoolList}
      {editMode ? (
        <button type="button" onClick={addSchool}>
          Add
        </button>
      ) : null}
    </div>
  );
}
