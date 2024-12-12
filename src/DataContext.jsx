import React, { createContext, useState, useEffect } from 'react';
import screenData from './data/screens.json';
import mountsData from './data/mounts.json';
import mediaPlayersData from './data/mediaPlayers.json';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, setState] = useState({ 
    screens: screenData,
    mounts: mountsData,
    mediaPlayers: mediaPlayersData,
    selectedScreen: screenData[0],
    selectedMount: mountsData[0],
    selectedMediaPlayer: mediaPlayersData[0],
    floorLine: 50,
    orientation: 'horizontal',
    wallType: 'Niche',
    nicheGap: 1.5,
    totalDepth: 0,
    nicheDepth: 0
  });

  useEffect(() => { 
    updateTotalDepth();
  }, [
    state.selectedScreen,
    state.selectedMount,
    state.selectedMediaPlayer,
    state.floorLine,
    state.orientation,
    state.wallType,
    state.nicheGap,
    state.setTotalDepth,
    state.nicheDepth
  ]);

  const updateTotalDepth = () => {
    const totalDepth = parseFloat(state.selectedScreen.Depth) + parseFloat(state.selectedMediaPlayer.Depth);
    totalDepth.toFixed(2);

    setState({ 
      screens: screenData, 
      mounts: mountsData,
      mediaPlayers: mediaPlayersData, 
      selectedScreen: state.selectedScreen,
      selectedMount: state.selectedMount,
      selectedMediaPlayer: state.selectedMediaPlayer,
      floorLine: state.floorLine,
      orientation: state.orientation,
      wallType: state.wallType,
      nicheGap: state.nicheGap,
      totalDepth: totalDepth,
      nicheDepth: state.nicheDepth
    });
  }

  const updateSelectedScreen = (newValue) => { 
    const newScreen = state.screens.find(item => Object.values(item)[0] === newValue);

    setState({ 
      screens: screenData, 
      mounts: mountsData,
      mediaPlayers: mediaPlayersData, 
      selectedScreen: newScreen,
      selectedMount: state.selectedMount,
      selectedMediaPlayer: state.selectedMediaPlayer,
      floorLine: state.floorLine,
      orientation: state.orientation,
      wallType: state.wallType,
      nicheGap: state.nicheGap,
      totalDepth: state.totalDepth,
      nicheDepth: state.nicheDepth
    });
  };

  const updateSelectedMount = (newValue) => { 
    const newMount = state.mounts.find(item => Object.values(item)[0] === newValue);

    setState({ 
      screens: screenData, 
      mounts: mountsData,
      mediaPlayers: mediaPlayersData, 
      selectedScreen: state.selectedScreen, 
      selectedMount: newMount,
      selectedMediaPlayer: state.selectedMediaPlayer,
      floorLine: state.floorLine,
      orientation: state.orientation,
      wallType: state.wallType,
      nicheGap: state.nicheGap,
      totalDepth: state.depth,
      nicheDepth: state.nicheDepth
    });
  };

  const updateSelectedMediaPlayer = (newValue) => { 
    const newMediaPlayer = state.mediaPlayers.find(item => Object.values(item)[0] === newValue);

    setState({ 
      screens: screenData, 
      mounts: mountsData,
      mediaPlayers: mediaPlayersData, 
      selectedScreen: state.selectedScreen, 
      selectedMount: state.selectedMount,
      selectedMediaPlayer: newMediaPlayer,
      floorLine: state.floorLine,
      orientation: state.orientation,
      wallType: state.wallType,
      nicheGap: state.nicheGap,
      totalDepth: state.depth,
      nicheDepth: state.nicheDepth
    });
  };

  const updateFloorLine = (newValue) => {
    setState({ 
      screens: screenData, 
      mounts: mountsData,
      mediaPlayers: mediaPlayersData, 
      selectedScreen: state.selectedScreen, 
      selectedMount: state.selectedMount,
      selectedMediaPlayer: state.selectedMediaPlayer,
      floorLine: newValue,
      orientation: state.orientation,
      wallType: state.wallType,
      nicheGap: state.nicheGap,
      totalDepth: state.depth,
      nicheDepth: state.nicheDepth
    });
  }

  const updateWallType = (newValue) => {
    setState({ 
      screens: screenData, 
      mounts: mountsData,
      mediaPlayers: mediaPlayersData, 
      selectedScreen: state.selectedScreen, 
      selectedMount: state.selectedMount,
      selectedMediaPlayer: state.selectedMediaPlayer,
      floorLine: state.floorLine,
      orientation: state.orientation,
      wallType: newValue,
      nicheGap: state.nicheGap,
      totalDepth: state.depth,
      nicheDepth: state.nicheDepth
    });
  }

  const updateOrientation = (newValue) => {
    setState({ 
      screens: screenData, 
      mounts: mountsData,
      mediaPlayers: mediaPlayersData, 
      selectedScreen: state.selectedScreen,
      selectedMount: state.selectedMount,
      selectedMediaPlayer: state.selectedMediaPlayer,
      floorLine: state.floorLine,
      orientation: newValue,
      wallType: state.wallType,
      nicheGap: state.nicheGap,
      totalDepth: state.depth,
      nicheDepth: state.nicheDepth
    });
  }

  const updateNicheGap = (newValue) => {
    setState({ 
      screens: screenData, 
      mounts: mountsData,
      mediaPlayers: mediaPlayersData, 
      selectedScreen: state.selectedScreen, 
      selectedMount: state.selectedMount,
      selectedMediaPlayer: state.selectedMediaPlayer,
      floorLine: state.floorLine,
      orientation: state.orientation,
      wallType: state.wallType,
      nicheGap: newValue,
      depth: state.depth,
      nicheDepth: state.nicheDepth
    });
  }

  return (
    <DataContext.Provider 
      value={{ 
        state, 
        updateSelectedScreen, 
        updateSelectedMount,
        updateSelectedMediaPlayer,
        updateFloorLine,
        updateOrientation,
        updateWallType,
        updateNicheGap
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
