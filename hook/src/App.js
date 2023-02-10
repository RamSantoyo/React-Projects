import React from 'react';
import Uses from './components/Usestate';
import UseEffect from './components/Usefect';
import UseRed from './components/UseReduce';
import UsRef from './components/UseRef';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Uses nombre={'Jorge'} />
      <UseEffect nombre2={'Ramsess'} />
      <UseRed />
      <UsRef />
    </div>
  );
}

export default App;
