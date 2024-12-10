import { useContext } from 'react';
import DataContext from '../../../DataContext.jsx';
import { Stage, Layer, Rect, Text } from 'react-konva';
  
  const Diagram = () => {
  const { state } = useContext(DataContext);

  let width = state.selectedScreen.Width;
  let height = state.selectedScreen.Height;

  let mountWidth = state.selectedMount.Width;
  let mountHeight = state.selectedMount.Height;

  let clearanceWidth = parseInt(width) + state.selectedMount.Clearance;
  let clearanceHeight = parseInt(height) + state.selectedMount.Clearance;

  let canvasWidth = window.innerWidth / 2;
  let canvasHeight = window.innerHeight - 250;

  switch (true) {
    case width > 500:
      width /= 1.85; height /= 1.85;
      mountWidth /= 1.85; mountHeight /= 1.85;
      clearanceWidth /= 1.85; clearanceHeight /= 1.85;
      break;
    case width > 100:
      width /= 2; height /= 2;
      mountWidth /= 2; mountHeight /= 2;
      clearanceWidth /= 2; clearanceHeight /= 2;
      break;
    case width > 50:
      width *= 4; height *= 4;
      mountWidth *= 4; mountHeight *= 4;
      clearanceWidth *= 4; clearanceHeight *= 4;
      break;
    case width > 20:
      width *= 6; height *= 6;
      mountWidth *= 6; mountHeight *= 6;
      clearanceWidth *= 6; clearanceHeight *= 6;
      break;
    default:
      width *= 25; height *= 25;
      mountWidth *= 25; mountHeight *= 25;
      clearanceWidth *= 25; clearanceHeight *= 25;
  }  

  let centerWidth = (canvasWidth - width) / 2;
  let centerHeight = (canvasHeight - height) / 2;

  let centerMountWidth = (canvasWidth - mountWidth) / 2;
  let centerMountHeight = (canvasHeight - mountHeight) / 2;

  let centerClearanceWidth = (canvasWidth - clearanceWidth) / 2;
  let centerClearanceHeight = (canvasHeight - clearanceHeight) / 2;

  return (
    <Stage width={canvasWidth} height={canvasHeight}>
      <Layer>
        {/* Clearance Rectangle */}
        <Rect
          x={ centerClearanceWidth }
          y={ centerClearanceHeight }
          width={ clearanceWidth }
          height={ clearanceHeight }
          fill="transparent"
          stroke="black"
          strokeWidth={1}
        />

        {/* Screen Rectangle */}
        <Rect
          x={centerWidth}
          y={centerHeight}
          width={width}
          height={height}
          fill="transparent"
          stroke="black"
          strokeWidth={2}
        />


        {/* Mount Rectangle */}
        <Rect
          x={centerMountWidth}
          y={centerMountHeight}
          width={mountWidth}
          height={mountHeight}
          fill="transparent"
          stroke="black"
          strokeWidth={1}
          dash={[10, 10]}
        />  

        {/* Screen Width (Position: Top Center) */}
        <Rect
          x={centerWidth + width / 2 - 28} 
          y={centerHeight - height / 4 - 28}
          width={60}
          height={40}
          fill="gray"
          stroke="black"
          strokeWidth={1}
        />
        <Text 
          x={centerWidth + width / 2 - 18} 
          y={centerHeight - height / 4 - 15}
          text={`${state.selectedScreen.Width}` + `"`} 
          fontSize={14} 
          fill="black" 
        />

        {/* Screen Height (Position: Right Center) */}
        <Rect
          x={centerWidth + width * 1.1} 
          y={centerHeight + height / 2 - 25}
          width={60}
          height={40}
          fill="gray"
          stroke="black"
          strokeWidth={1}
        />
        <Text 
          x={centerWidth + width * 1.1 + 10} 
          y={centerHeight + height / 2 - 11}
          text={`${state.selectedScreen.Height}` + `"`} 
          fontSize={14} 
          fill="black" 
        />
      </Layer>
    </Stage>
  );
};

export default Diagram;
