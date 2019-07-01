import React from 'react';
import Controller from './Components/Controller';
import './App.css';

// App Component that contains the Controller/Parent component

function App() {
  return (
    <>
      <Controller />
    </>
  );
}

setInterval(App, 1000)

export default App;