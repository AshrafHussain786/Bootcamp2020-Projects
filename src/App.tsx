import React, { useState, useCallback } from 'react';
import './App.css';
import LaunchList from "./components/LaunchList";
import LaunchDetails from "./components/LaunchProfile";


const App = () => {
  const [id, setId] = useState(42);
  const handleIdChange = useCallback(newId => {
    setId(newId)
  }, []);

  return (
    <div className="App">
      <LaunchList  handleIdChange={handleIdChange} />
      <LaunchDetails id={id} />     
    </div>
  );
}

export default App;
