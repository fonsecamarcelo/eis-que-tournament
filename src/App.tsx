import React from 'react';
import './App.css';

import Login from "./pages/login/Login";
import ChooseTeam from "./pages/chooseTeam/ChooseTeam";
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
