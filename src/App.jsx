import React from 'react';
import routes from './routes';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      {routes}
    </>
  );
}

export default App;
