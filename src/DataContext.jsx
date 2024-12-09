import React, { createContext, useState } from 'react';
import jsonData from './data.json';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [state, setState] = useState({ 
        data: jsonData, 
        selectedScreen: jsonData[0]
    });

    const updateSelectedScreen = (newValue) => { 
        const newScreen = state.data.find(item => Object.values(item)[0] === newValue)
        setState({ data: jsonData, selectedScreen: newScreen });
    };

  return (
    <DataContext.Provider value={{ state, updateSelectedScreen }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
