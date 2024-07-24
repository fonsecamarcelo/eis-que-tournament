import React from 'react';
import './App.css';

import Login from "./components/login/Login";
import ChooseTeam from "./components/chooseTeam/ChooseTeam";
import './firebase/config'

function App() {

  return (
    <>
      <Login />
      <ChooseTeam />
    </>
  );
}

export default App;
