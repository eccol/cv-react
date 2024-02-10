import { useState } from 'react';
import './App.css';

import Info from './components/Info.jsx';
import Schools from './components/Schools.jsx';
import Jobs from './components/Jobs.jsx';

function App() {
  const [editMode, setEditMode] = useState(true);

  function toggleEdit() {
    setEditMode(!editMode);
  }

  return (
    <>
      <button type="button" id="edit-button" onClick={toggleEdit}>
        {editMode ? 'Save' : 'Edit'}
      </button>
      <Info editMode={editMode} />
      <Jobs editMode={editMode} />
      <Schools editMode={editMode} />
    </>
  );
}

export default App;
