import { useState } from 'react';
import './App.css';

import Info from './components/Info.jsx';
import Schools from './components/Schools.jsx';

function App() {
  const [editMode, setEditMode] = useState(true);

  function toggleEdit() {
    setEditMode(!editMode);
  }

  return (
    <>
      <button type="button" onClick={toggleEdit}>
        {editMode ? 'Save' : 'Edit'}
      </button>
      <Info editMode={editMode} />
      <Schools editMode={editMode} />
    </>
  );
}

export default App;
