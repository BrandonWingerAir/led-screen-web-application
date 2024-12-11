import React, { createContext, useState } from 'react';
import screenData from './data/screens.json';
import mountsData from './data/mounts.json';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, setState] = useState({ 
    screens: screenData,
    mounts: mountsData,
    selectedScreen: screenData[0],
    selectedMount: mountsData[0],
    floorLine: 50,
    wallType: 'Niche'
  });    

  const updateSelectedScreen = (newValue) => { 
    const newScreen = state.screens.find(item => Object.values(item)[0] === newValue)
    setState({ 
      screens: screenData, 
      mounts: mountsData, 
      selectedScreen: newScreen,
      selectedMount: state.selectedMount,
      floorLine: state.floorLine,
      wallType: state.wallType
    });
  };

  const updateSelectedMount = (newValue) => { 
    const newMount = state.mounts.find(item => Object.values(item)[0] === newValue)
    setState({ 
      screens: screenData, 
      mounts: mountsData, 
      selectedScreen: state.selectedScreen, 
      selectedMount: newMount,
      floorLine: state.floorLine,
      wallType: state.wallType
    });
  };

  const updateFloorLine = (newValue) => {
    setState({ 
      screens: screenData, 
      mounts: mountsData, 
      selectedScreen: state.selectedScreen, 
      selectedMount: state.selectedMount,
      floorLine: newValue,
      wallType: state.wallType
    });
  }

  const updateWallType = (newValue) => {
    setState({ 
      screens: screenData, 
      mounts: mountsData, 
      selectedScreen: state.selectedScreen, 
      selectedMount: state.selectedMount,
      floorLine: state.floorLine,
      wallType: newValue
    });
  }

  return (
    <DataContext.Provider 
      value={{ state, updateSelectedScreen, updateSelectedMount, updateFloorLine, updateWallType }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
