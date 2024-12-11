import { useContext } from 'react';
import DataContext from '../../../DataContext.jsx';
import { Stage, Layer, Rect, Line, Arrow, Text } from 'react-konva';
  
  const Diagram = () => {
  const { state } = useContext(DataContext);

  let width = state.selectedScreen.Width;
  let height = state.selectedScreen.Height;

  let mountWidth = state.selectedMount.Width;
  let mountHeight = state.selectedMount.Height;

  let outerNiche = state.nicheGap;

  let canvasWidth = window.innerWidth / 2;
  let canvasHeight = window.innerHeight - 180;

  let floorLine = state.floorLine * 9;

  if (state.wallType == 'flatWall') {
    outerNiche = 0;
  } else if (outerNiche !== 1.5 || 2) {
    outerNiche = state.nicheGap;
  } else if (width > 55) {
    outerNiche = 2;
  }

  switch (true) {
    case width > 500:
      width *= .4; height *= .4;
      mountWidth *= .4; mountHeight *= .4;
      outerNiche *= .4;
      break;
    case width > 100:
      width *= 2; height *= 2;
      mountWidth *= 2; mountHeight *= 2;
      outerNiche *= 2;
      break;
    case width > 80:
      width *= 3; height *= 3;
      mountWidth *= 3; mountHeight *= 3;
      outerNiche *= 3;
      break;
    case width > 50:
      width *= 4; height *= 4;
      mountWidth *= 4; mountHeight *= 4;
      outerNiche *= 4;
      break;
    case width > 20:
      width *= 6; height *= 6;
      mountWidth *= 6; mountHeight *= 6;
      outerNiche *= 6;
      break;
    default:
      width *= 25; height *= 25;
      mountWidth *= 25; mountHeight *= 25;
      outerNiche *= 25;
  }

  let centerWidth = (canvasWidth - width) / 2;
  let centerHeight = (canvasHeight - height) / 2;

  let centerMountWidth = (canvasWidth - mountWidth) / 2;
  let centerMountHeight = (canvasHeight - mountHeight) / 2;

  return (
    <Stage width={canvasWidth} height={canvasHeight}>
      <Layer>
        {/* Niche Rectangle */}
        <Rect
          x={ centerWidth - outerNiche / 2}
          y={ centerHeight - outerNiche / 2 }
          width={ width + outerNiche }
          height={ height + outerNiche }
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
          fill="#f5f5f5"
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
          fill="#f5f5f5"
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

        <Rect
          x={width * 0.2} 
          y={height * 2.25 - 55}
          width={60}
          height={40}
          fill="#f5f5f5"
          stroke="black"
          strokeWidth={1}
        />
        <Text 
          x={width * 0.2 + 20} 
          y={height * 2.25 - 40}
          text={state.floorLine + `"`}
          fontSize={12} 
          fill="black" 
        />
        <Text 
          x={width * 0.2 - 5} 
          y={height * 2.25}
          text={`Centerline of`}
          fontSize={12} 
          fill="black" 
        />
        <Text 
          x={width * 0.2 + 10} 
          y={height * 2.25 + 18}
          text={`Display`}
          fontSize={12} 
          fill="black" 
        />

        {/* Vertical Floor Line */}
        <Arrow 
          points={[
            width * 0.56, 
            centerHeight + height / 2 + 20, 
            width * 0.56, 
            floorLine
          ]} 
          stroke="black" 
          strokeWidth={1} 
          pointerLength={5} 
          pointerWidth={5} 
          fill="black" 
        />

        {/* Horizontal Floor Line */}
        <Line 
          points={[
            width * 0.56, 
            floorLine + 14,
            width * 2, 
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
