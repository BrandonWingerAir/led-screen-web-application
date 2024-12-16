import React, { createContext, useState, useEffect } from 'react';
import screenData from './data/screens.json';
import mountsData from './data/mounts.json';
import mediaPlayersData from './data/mediaPlayers.json';
import receptacleBoxesData from './data/receptacleBoxes.json';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, setState] = useState({ 
    screens: screenData,
    mounts: mountsData,
    mediaPlayers: mediaPlayersData,
    receptacleBoxes: receptacleBoxesData,
    selectedScreen: screenData[0],
    selectedMount: mountsData[0],
    selectedMediaPlayer: mediaPlayersData[0],
    selectedReceptacleBox: receptacleBoxesData[0],
    floorLine: 50,
    orientation: 'horizontal',
    wallType: 'Niche',
    nicheGap: 1.5,
    totalDepth: 0,
    descTitle: '',
    drawer: '',
    department: '',
    screenSizeDesc: ''
  });

  useEffect(() => { 
    updateTotalDepth(state.totalDepth);
  }, [
    state.selectedScreen,
    state.selectedMount,
    state.selectedMediaPlayer
  ]);

  const updateTotalDepth = () => {
    const screenDepth = parseFloat(state.selectedScreen.Depth);
    const mediaPlayerDepth = parseFloat(state.selectedMediaPlayer.Depth);
    const mountDepth = parseFloat(state.selectedMount.Depth);

    const backDepth = Math.max(mediaPlayerDepth, mountDepth);

    const totalDepth = screenDepth + backDepth;
    totalDepth.toFixed(2);

    setState(prevState => ({ 
      ...prevState, 
      totalDepth: totalDepth,
    }));
  }
  
  const updateSelectedScreen = (newValue) => { 
    const newScreen = state.screens.find(item => Object.values(item)[0] === newValue);

    setState(prevState => ({ 
      ...prevState, 
      selectedScreen: newScreen,
    }));    
  };

  const updateSelectedMount = (newValue) => { 
    const newMount = state.mounts.find(item => Object.values(item)[0] === newValue);

    setState(prevState => ({ 
      ...prevState, 
      selectedMount: newMount,
    }));
  };

  const updateSelectedMediaPlayer = (newValue) => { 
    const newMediaPlayer = state.mediaPlayers.find(item => Object.values(item)[0] === newValue);

    setState(prevState => ({ 
      ...prevState, 
      selectedMediaPlayer: newMediaPlayer,
    }));
  };


  const updateSelectedReceptacleBox = (newValue) => { 
    const newReceptacleBox = state.receptacleBoxes.find(item => Object.values(item)[0] === newValue);

    setState(prevState => ({ 
      ...prevState, 
      selectedReceptacleBox: newReceptacleBox,
    }));
  };

  const updateFloorLine = (newValue) => {
    setState(prevState => ({ 
      ...prevState, 
      floorLine: newValue,
    }));
  }

  const updateWallType = (newValue) => {
    let nicheGap = state.nicheGap;

    if (newValue == 'Niche') {
      if (nicheGap == 0) {
        nicheGap = 1.5;
      } else {
        nicheGap = state.nicheGap
      }
    } else {
      nicheGap = 0;
    }

    setState(prevState => ({ 
      ...prevState,
      nicheGap: nicheGap,
      wallType: newValue
    }));
  }

  const updateOrientation = (newValue) => {
    setState(prevState => ({ 
      ...prevState, 
      orientation: newValue,
    }));
  }

  const updateNicheGap = (newValue) => {
    setState(prevState => ({ 
      ...prevState, 
      nicheGap: newValue,
    }));
  }

  const updateDescTitle = (newValue) => {
    setState(prevState => ({ 
      ...prevState, 
      descTitle: newValue
    }));
  }

  const updateDrawer = (newValue) => {
    setState(prevState => ({ 
      ...prevState, 
      drawer: newValue
    }));
  }

  const updateDepartment = (newValue) => {
    setState(prevState => ({ 
      ...prevState, 
      department: newValue
    }));
  }

  const updateScreenSizeDesc = (newValue) => {
    setState(prevState => ({ 
      ...prevState, 
      screenSizeDesc: newValue
    }));
  }

  return (
    <DataContext.Provider 
      value={{ 
        state, 
        updateSelectedScreen, 
        updateSelectedMount,
        updateSelectedMediaPlayer,
        updateSelectedReceptacleBox,
        updateFloorLine,
        updateOrientation,
        updateWallType,
        updateNicheGap,
        updateDescTitle,
        updateDrawer,
        updateDepartment,
        updateScreenSizeDesc
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
