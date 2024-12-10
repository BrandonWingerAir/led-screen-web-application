import { useContext } from 'react';
import DataContext from '../../../DataContext.jsx';
import { Stage, Layer, Rect, Line, Arrow, Text } from 'react-konva';
  
  const Diagram = () => {
  const { state } = useContext(DataContext);

  let width = state.selectedScreen.Width;
  let height = state.selectedScreen.Height;

  let mountWidth = state.selectedMount.Width;
  let mountHeight = state.selectedMount.Height;

  let clearanceWidth = parseInt(width) + state.selectedMount.Clearance;
  let clearanceHeight = parseInt(height) + state.selectedMount.Clearance;

  let canvasWidth = window.innerWidth / 2;
  let canvasHeight = window.innerHeight - 180;

  let floorLine = 50 * 9;

  switch (true) {
    case width > 500:
      width *= .4; height *= .4;
      mountWidth *= .4; mountHeight *= .4;
      clearanceWidth *= .4; clearanceHeight *= .4;
      break;
    case width > 100:
      width *= 2; height *= 2;
      mountWidth *= 2; mountHeight *= 2;
      clearanceWidth *= 2; clearanceHeight *= 2;
      break;
    case width > 80:
      width *= 3; height *= 3;
      mountWidth *= 3; mountHeight *= 3;
      clearanceWidth *= 3; clearanceHeight *= 3;
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

  console.log(floorLine);
  

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
          x={centerWidth + width * 0.5 - 72} 
          y={centerHeight - height / 4 - 28}
          width={60}
          height={40}
          fill="gray"
          stroke="black"
          strokeWidth={1}
        />
        <Text 
          x={centerWidth + width * 0.5 - 63} 
          y={centerHeight - height * 0.25 - 15}
          text={`${state.selectedScreen.Width}` + `"`} 
          fontSize={14} 
          fill="black" 
        />

        {/* Screen Height (Position: Right Center) */}
        <Rect
          x={centerWidth + width * 1.1} 
          y={centerHeight + height * 0.5 - 50}
          width={60}
          height={40}
          fill="gray"
          stroke="black"
          strokeWidth={1}
        />
        <Text 
          x={centerWidth + width * 1.1 + 10} 
          y={centerHeight + height / 2 - 36}
          text={`${state.selectedScreen.Height}` + `"`} 
          fontSize={14} 
          fill="black" 
        />

        {/* Dotted Horizontal Line */}
        <Line 
          points={[
            canvasWidth / 7.5, 
            centerHeight + height / 2, 
            canvasWidth / 1.75 * 1.5,
            centerHeight + height / 2
          ]} 
          stroke="black" 
          strokeWidth={1} 
          dash={[4, 2]} 
        />

        {/* Dotted Vertical Line */}
        <Line 
          points={[
            canvasWidth / 2, 
            canvasHeight / 15, 
            canvasWidth / 2,
            canvasHeight / 1.6 * 1.5
          ]} 
          stroke="black" 
          strokeWidth={1} 
          dash={[4, 2]} 
        />

        {/* Vertical Floor Line */}
        <Arrow 
          points={[centerClearanceWidth * 0.65, centerHeight + height / 2 + 20, centerClearanceWidth * 0.65, floorLine]} 
          stroke="black" 
          strokeWidth={1} 
          pointerLength={5} 
          pointerWidth={5} 
          fill="black" 
        />
        <Text 
          x={centerClearanceWidth * 0.2} 
          y={centerHeight + height / 1.33}
          text={`Center Line`}
          fontSize={12} 
          fill="black" 
        />

        {/* Horizontal Floor Line */}
        <Line 
          points={[
            centerClearanceWidth * 0.65, 
            floorLine + 14,
            width * 1.85, 
            floorLine + 14
          ]} 
          stroke="black" 
          strokeWidth={1} 
        />
      </Layer>
    </Stage>
  );
};

export default Diagram;
