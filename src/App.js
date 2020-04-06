import React from 'react';
import Card from './Card';
import GenButton from './GenButton';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Card />
        <GenButton />
      </header>
    </div>
  );
}

export default App;
