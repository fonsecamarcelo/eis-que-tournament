import React, { useState } from 'react';
import './App.css';
import teams from './teams.json';
import Select from 'react-select';
import { MultiValue } from 'react-select';
import makeAnimated from 'react-select/animated'

interface Team {
  name: string;
  flag: string;
}

function App() {
  const [selectedItem, setSelectedItem] = useState<MultiValue<Team> | null>(null);

  const animatedComponents = makeAnimated();

  const handleSelect = () => {
    console.log(selectedItem);
  }

  return (
      <>
        <Select
            options={teams}
            isMulti
            getOptionLabel={(option: Team) => option.name}
            getOptionValue={(option: Team) => option.name}
            onChange={(item) => setSelectedItem(item as MultiValue<Team>)}
            components={animatedComponents}
        />
        <button onClick={handleSelect}>Enviar</button>
      </>
  );
}

export default App;
