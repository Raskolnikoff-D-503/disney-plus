import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Login} from '@/components';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
