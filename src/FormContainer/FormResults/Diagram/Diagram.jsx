import { useContext } from 'react';
import DataContext from '../../../DataContext.jsx';
import { Stage, Layer, Rect, Line, Arrow, Text } from 'react-konva';
import "./Diagram.css";
  
const Diagram = () => {
  const { state } = useContext(DataContext);

  let monitorWidth = state.selectedScreen.Width;
  let monitorHeight = state.selectedScreen.Height;

  let mountWidth = state.selectedMount.Width;
  let mountHeight = state.selectedMount.Height;

  let outerNiche = state.nicheGap;

  let canvasWidth = window.innerWidth / 3;
  let canvasHeight = window.innerHeight - 180;
  
  if (canvasHeight > 800) {
    canvasHeight /= 1.5;
  }

  let floorLine = state.floorLine * 9;

  if (state.wallType == 'flatWall') {
    outerNiche = 0;
  } else if (outerNiche !== 1.5 || 2) {
    outerNiche = state.nicheGap;
  } else if (width > 55) {
    outerNiche = 2;
  }

  // Reverse values for vertical orientation
  if (state.orientation == 'horizontal') {
    monitorWidth = state.selectedScreen.Width;
    monitorHeight = state.selectedScreen.Height;
  } else {
    monitorWidth = state.selectedScreen.Height;
    monitorHeight = state.selectedScreen.Width;
  }

  // Scale Selection
  const monitorScale1 = 0.4;
  const monitorScale2 = 2;
  const monitorScale3 = 3;
  const monitorScale4 = 4;
  const monitorScale5 = 5;
  const monitorScale6 = 25;

  switch (true) {
    case monitorWidth > 500:
      monitorWidth *= monitorScale1; 
      monitorHeight *= monitorScale1;
      mountWidth *= monitorScale1; 
      mountHeight *= monitorScale1;
      outerNiche *= monitorScale1;
      break;
    case monitorWidth > 100:
      monitorWidth*= monitorScale2; 
      monitorHeight *= monitorScale2;
      mountWidth *= monitorScale2; 
      mountHeight *= monitorScale2;
      outerNiche *= monitorScale2;
      break;
    case monitorWidth > 80:
      monitorWidth*= monitorScale3; 
      monitorHeight *= monitorScale3;
      mountWidth *= monitorScale3; 
      mountHeight *= monitorScale3;
      outerNiche *= monitorScale3;
      break;
    case monitorWidth > 50:
      monitorWidth*= monitorScale4; 
      monitorHeight *= monitorScale4;
      mountWidth *= monitorScale4; 
      mountHeight *= monitorScale4;
      outerNiche *= monitorScale4;
      break;
    case monitorWidth > 20:
      monitorWidth*= monitorScale5; 
      monitorHeight *= monitorScale5;
      mountWidth *= monitorScale5; 
      mountHeight *= monitorScale5;
      outerNiche *= monitorScale5;
      break;
    default:
      monitorWidth*= monitorScale6; 
      monitorHeight *= monitorScale6;
      mountWidth *= monitorScale6; 
      mountHeight *= monitorScale6;
      outerNiche *= monitorScale6;
  }

  // Monitor distance from center (Radius)
  let centerWidth = (canvasWidth - monitorWidth) / 2;
  let centerHeight = (canvasHeight - monitorHeight) / 2;

  let centerMountWidth = (canvasWidth - mountWidth) / 2;
  let centerMountHeight = (canvasHeight - mountHeight) / 2;

  // Render Canvas
  return (
    <div 
      id='led-screens-diagram-canvas' 
      className='led-screens-canvas-container'
    >
      <Stage width={canvasWidth} height={canvasHeight}>
        <Layer>
          {/* Niche Rectangle */}
          <Rect
            x={ centerWidth - outerNiche / 2}
            y={ centerHeight - outerNiche / 2 }
            width={ monitorWidth + outerNiche }
            height={ monitorHeight + outerNiche }
            fill="transparent"
            stroke="black"
            strokeWidth={1}
          />

          {/* Screen Rectangle */}
          <Rect
            x={centerWidth}
            y={centerHeight}
            width={monitorWidth}
            height={monitorHeight}
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
            x={centerWidth + monitorWidth * 0.5 - 72} 
            y={centerHeight - monitorHeight / 4 - 28}
            width={60}
            height={40}
            fill="#f5f5f5"
            stroke="black"
            strokeWidth={1}
          />
          <Text 
            x={centerWidth + monitorWidth * 0.5 - 63} 
            y={centerHeight - monitorHeight * 0.25 - 15}
            text={`${
              state.orientation == 'horizontal' ? 
                state.selectedScreen.Width 
                : state.selectedScreen.Height
              }` + `"`}
            fontSize={14} 
            fill="black" 
          />

          {/* Screen Height (Position: Right Center) */}
          <Rect
            x={centerWidth + monitorWidth * 1.1} 
            y={centerHeight + monitorHeight * 0.5 - 50}
            width={60}
            height={40}
            fill="#f5f5f5"
            stroke="black"
            strokeWidth={1}
          />
          <Text 
            x={centerWidth + monitorWidth * 1.1 + 10} 
            y={centerHeight + monitorHeight / 2 - 36}
            text={`${
              state.orientation == 'horizontal' ? 
                state.selectedScreen.Height 
                : state.selectedScreen.Width
              }` + `"`}
            fontSize={14} 
            fill="black" 
          />

          {/* Dotted Horizontal Line */}
          <Line 
            points={[
              canvasWidth / 7.5, 
              centerHeight + monitorHeight / 2, 
              canvasWidth / 1.75 * 1.5,
              centerHeight + monitorHeight / 2
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

          {/* Floor Line Distance (Position: Left Center) */}
          <Rect
            x={monitorWidth * 0.2 - 5} 
            y={monitorHeight * 2.75}
            width={60}
            height={40}
            fill="#f5f5f5"
            stroke="black"
            strokeWidth={1}
          />
          <Text 
            x={monitorWidth * 0.2 + 16} 
            y={monitorHeight * 2.75 + 16}
            text={state.floorLine + `"`}
            fontSize={12} 
            fill="black" 
          />
          <Text 
            x={monitorWidth * 0.2 - 10} 
            y={monitorHeight * 2.75 + 48}
            text={`Centerline of`}
            fontSize={12} 
            fill="black" 
          />
          <Text 
            x={monitorWidth * 0.2 + 5} 
            y={monitorHeight * 2.75 + 64}
            text={`Display`}
            fontSize={12} 
            fill="black" 
          />

          {/* Vertical Floor Line */}
          <Arrow 
            points={[
              monitorWidth * 0.56, 
              centerHeight + monitorHeight / 2 + 20, 
              monitorWidth * 0.56, 
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
              monitorWidth * 0.56, 
              floorLine + 14,
              monitorWidth * 2, 
              floorLine + 14
            ]} 
            stroke="black" 
            strokeWidth={1} 
          />
        </Layer>
      </Stage>
    </div>
  );
};

export default Diagram;
