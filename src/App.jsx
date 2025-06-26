import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FloorPlan from './pages/FloorPlan';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<FloorPlan />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
