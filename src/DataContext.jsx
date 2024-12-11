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
    wallType: 'Niche',
    nicheGap: 1.5
  });    

  const updateSelectedScreen = (newValue) => { 
    const newScreen = state.screens.find(item => Object.values(item)[0] === newValue)
    setState({ 
      screens: screenData, 
      mounts: mountsData, 
      selectedScreen: newScreen,
      selectedMount: state.selectedMount,
      floorLine: state.floorLine,
      wallType: state.wallType,
      nicheGap: state.nicheGap
    });
  };

  const updateSelectedMount = (newValue) => { 
    const newMount = state.mounts.find(item => Object.values(item)[0] === newValue);

    setState({ 
      screens: screenData, 
      mounts: mountsData, 
      selectedScreen: state.selectedScreen, 
      selectedMount: newMount,
      floorLine: state.floorLine,
      wallType: state.wallType,
      nicheGap: state.nicheGap
    });
  };

  const updateFloorLine = (newValue) => {
    setState({ 
      screens: screenData, 
      mounts: mountsData, 
      selectedScreen: state.selectedScreen, 
      selectedMount: state.selectedMount,
      floorLine: newValue,
      wallType: state.wallType,
      nicheGap: state.nicheGap
    });
  }

  const updateWallType = (newValue) => {
    setState({ 
      screens: screenData, 
      mounts: mountsData, 
      selectedScreen: state.selectedScreen, 
      selectedMount: state.selectedMount,
      floorLine: state.floorLine,
      wallType: newValue,
      nicheGap: state.nicheGap
    });
  }

  const updateNicheGap = (newValue) => {
    setState({ 
      screens: screenData, 
      mounts: mountsData, 
      selectedScreen: state.selectedScreen, 
      selectedMount: state.selectedMount,
      floorLine: state.floorLine,
      wallType: state.wallType,
      nicheGap: newValue
    });
  }

  return (
    <DataContext.Provider 
      value={{ 
        state, 
        updateSelectedScreen, 
        updateSelectedMount, 
        updateFloorLine, 
        updateWallType,
        updateNicheGap
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
