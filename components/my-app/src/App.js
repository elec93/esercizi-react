// Create an App component that wraps a Routes component 
// and add a single Route to the / path that renders the Welcome component from Function Components 01,
// passing it a name prop. Render the App component within a BrowserRouter component.
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Welcome from './Welcome';

function App(){
  return (
      <Routes>
        <Route path="/" element={<Welcome name="John" />} />
      </Routes>
  );
};

export default App;