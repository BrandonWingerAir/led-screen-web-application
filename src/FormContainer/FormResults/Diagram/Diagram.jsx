import { useContext } from 'react';
import DataContext from '../../../DataContext.jsx';
import { Stage, Layer, Rect, Line, Arrow, Text } from 'react-konva';
import "./Diagram.css";
  
const Diagram = () => {
  const { state } = useContext(DataContext);

  let monitorWidth = state.selectedScreen.Width;
  let monitorHeight = state.selectedScreen.Height;

  let totalWidth = parseFloat(state.selectedScreen.Width) + parseFloat(state.nicheGap);
  let totalHeight = parseFloat(state.selectedScreen.Height) + parseFloat(state.nicheGap);

  totalWidth = totalWidth.toFixed(2);
  totalHeight = totalHeight.toFixed(2);

  let mountWidth = state.selectedMount.Width;
  let mountHeight = state.selectedMount.Height;

  let receptacleBoxWidth = state.selectedReceptacleBox.Width;
  let receptacleBoxHeight = state.selectedReceptacleBox.Height;

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

  // Set monitor dimensions based on orientation
  if (state.orientation == 'horizontal') {
    monitorWidth = state.selectedScreen.Width;
    monitorHeight = state.selectedScreen.Height;
  } else {
    monitorWidth = state.selectedScreen.Height;
    monitorHeight = state.selectedScreen.Width;
  }

  // Scale Selection (TODO: Refactor to be reponsive based on container size and dpi)
  const diagramScale1 = 0.4;
  const diagramScale2 = 2;
  const diagramScale3 = 3;
  const diagramScale4 = 4;
  const diagramScale5 = 5;
  const diagramScale6 = 25;

  switch (true) {
    case monitorWidth > 500:
      monitorWidth *= diagramScale1; 
      monitorHeight *= diagramScale1;
      mountWidth *= diagramScale1; 
      mountHeight *= diagramScale1;
      receptacleBoxWidth *= diagramScale1; 
      receptacleBoxHeight *= diagramScale1;
      outerNiche *= diagramScale1;
      break;
    case monitorWidth > 100:
      monitorWidth*= diagramScale2; 
      monitorHeight *= diagramScale2;
      mountWidth *= diagramScale2; 
      mountHeight *= diagramScale2;
      receptacleBoxWidth *= diagramScale2; 
      receptacleBoxHeight *= diagramScale2;
      outerNiche *= diagramScale2;
      break;
    case monitorWidth > 80:
      monitorWidth*= diagramScale3; 
      monitorHeight *= diagramScale3;
      mountWidth *= diagramScale3; 
      mountHeight *= diagramScale3;
      receptacleBoxWidth *= diagramScale3; 
      receptacleBoxHeight *= diagramScale3;
      outerNiche *= diagramScale3;
      break;
    case monitorWidth > 50:
      monitorWidth*= diagramScale4; 
      monitorHeight *= diagramScale4;
      mountWidth *= diagramScale4; 
      mountHeight *= diagramScale4;
      receptacleBoxWidth *= diagramScale4; 
      receptacleBoxHeight *= diagramScale4;
      outerNiche *= diagramScale4;
      break;
    case monitorWidth > 20:
      monitorWidth*= diagramScale5; 
      monitorHeight *= diagramScale5;
      mountWidth *= diagramScale5; 
      mountHeight *= diagramScale5;
      receptacleBoxWidth *= diagramScale5; 
      receptacleBoxHeight *= diagramScale5;
      outerNiche *= diagramScale5;
      break;
    default:
      monitorWidth*= diagramScale6; 
      monitorHeight *= diagramScale6;
      mountWidth *= diagramScale6; 
      mountHeight *= diagramScale6;
      receptacleBoxWidth *= diagramScale6; 
      receptacleBoxHeight *= diagramScale6;
      outerNiche *= diagramScale6;
  }

  // Monitor distance from center (Radius)
  let screenPositionX = (canvasWidth - monitorWidth) / 2;
  let screenPositionY = (canvasHeight - monitorHeight) / 2;

  let centerMountWidth = (canvasWidth - mountWidth) / 2;
  let centerMountHeight = (canvasHeight - mountHeight) / 2;

  // Set monitor dimensions based on orientation
  let floorLineX = 0;
  let floorLineY = 0;

  if (state.orientation == "horizontal") {
    floorLineX = monitorWidth;
    floorLineY = monitorHeight;
  } else {
    floorLineX = monitorHeight;
    floorLineY = monitorWidth;
  }

  // Render Canvas
  return (
    <div 
      id='led-screens-diagram-canvas' 
      className='led-screens-canvas-container'
    >
      <Stage width={canvasWidth} height={canvasHeight}>
        <Layer>
          {/* Niche Box */}
          <Rect
            x={ screenPositionX - outerNiche / 2}
            y={ screenPositionY - outerNiche / 2 }
            width={ monitorWidth + outerNiche }
            height={ monitorHeight + outerNiche }
            fill="transparent"
            stroke="black"
            strokeWidth={1}
          />

          {/* Screen Box */}
          <Rect
            x={screenPositionX}
            y={screenPositionY}
            width={monitorWidth}
            height={monitorHeight}
            fill="transparent"
            stroke="black"
            strokeWidth={2}
          />

          {/* Mount Box */}
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

          {/* Receptacle Box */}
          <Rect
            x={canvasWidth / 2 - receptacleBoxWidth / 2}
            y={screenPositionY + monitorHeight - receptacleBoxHeight - 12}
            width={receptacleBoxWidth}
            height={receptacleBoxHeight}
            fill="transparent"
            stroke="black"
            strokeWidth={1}
            dash={[3, 3]}
          />
          <Rect
            x={canvasWidth / 2 - receptacleBoxWidth / 2 - 2}
            y={screenPositionY + monitorHeight - receptacleBoxHeight - 12 - 2}
            width={receptacleBoxWidth + 4}
            height={receptacleBoxHeight + 4}
            fill="transparent"
            stroke="black"
            strokeWidth={1}
            dash={[3, 3]}
          />

          {/* Screen Width Label (Position: Top Center) */}
          <Rect
            x={screenPositionX + monitorWidth * 0.5 - 72} 
            y={screenPositionY - monitorHeight * 0.25 - 50}
            width={60}
            height={40}
            fill="#f5f5f5"
            stroke="black"
            strokeWidth={1}
          />
          <Text 
            x={screenPositionX + monitorWidth * 0.5 - 62} 
            y={screenPositionY - monitorHeight * 0.25 - 36}
            text={`${
              state.orientation == 'horizontal' ? 
                state.selectedScreen.Width 
                : state.selectedScreen.Height
              }` + `"`}
            fontSize={14} 
            fill="black" 
          />

          {/* Screen Width Arrows Line (Position: Top) */}
          <Arrow 
            points={[
              screenPositionX + 3,
              screenPositionY - outerNiche / 2 - 21,
              screenPositionX + monitorWidth - 3, 
              screenPositionY - outerNiche / 2 - 21
            ]} 
            stroke="black" 
            strokeWidth={1}
            pointerLength={5} 
            pointerWidth={5}
            fill="black"
            pointerAtBeginning={true}
          />

          {/* Screen Height Label (Position: Right Center) */}
          <Rect
            x={screenPositionX + monitorWidth + 34} 
            y={screenPositionY + monitorHeight * 0.5 - 50}
            width={60}
            height={40}
            fill="#f5f5f5"
            stroke="black"
            strokeWidth={1}
          />
          <Text 
            x={screenPositionX + monitorWidth + 44} 
            y={screenPositionY + monitorHeight * 0.5 - 36}
            text={`${
              state.orientation == 'horizontal' ? 
                state.selectedScreen.Height 
                : state.selectedScreen.Width
              }` + `"`}
            fontSize={14} 
            fill="black" 
          />

          {/* Screen Height Arrows Line (Position: Right) */}
          <Arrow 
            points={[
              screenPositionX + monitorWidth + 25, 
              screenPositionY + 3,
              screenPositionX + monitorWidth + 25, 
              screenPositionY + monitorHeight - 3
            ]} 
            stroke="black" 
            strokeWidth={1}
            pointerLength={5} 
            pointerWidth={5}
            fill="black"
            pointerAtBeginning={true}
          />

          {/* Niche Width Label (Position: Bottom Center) */}
          <Rect
            x={screenPositionX + monitorWidth * 0.5 - 72}
            y={screenPositionY + monitorHeight + 34}
            width={60}
            height={40}
            fill="#f5f5f5"
            stroke="black"
            strokeWidth={1}
          />
          <Text 
            x={screenPositionX + monitorWidth * 0.5 - 62} 
            y={screenPositionY + monitorHeight + 48}
            text={`${
              state.orientation == 'horizontal' ? 
                totalWidth
                : totalHeight
              }` + `"`}
            fontSize={14} 
            fill="black" 
          />

          {/* Niche Width Arrows Line (Position: Bottom) */}
          <Arrow 
            points={[
              screenPositionX - outerNiche / 2 + 3, 
              screenPositionY + monitorHeight + 25,
              screenPositionX + monitorWidth + outerNiche / 2 - 3, 
              screenPositionY + monitorHeight + 25
            ]} 
            stroke="black" 
            strokeWidth={1}
            pointerLength={5} 
            pointerWidth={5}
            fill="black"
            pointerAtBeginning={true}
          />

          {/* Niche Height Label (Position: Left Center) */}
          <Rect
            x={screenPositionX - monitorWidth / 2} 
            y={screenPositionY + monitorHeight * 0.5 - 50}
            width={60}
            height={40}
            fill="#f5f5f5"
            stroke="black"
            strokeWidth={1}
          />
          <Text 
            x={screenPositionX - monitorWidth / 2 + 10} 
            y={screenPositionY + monitorHeight / 2 - 36}
            text={`${
              state.orientation == 'horizontal' ? 
                totalHeight 
                : totalWidth
              }` + `"`}
            fontSize={14} 
            fill="black" 
          />

          {/* Niche Height Arrows Line (Position: Left) */}
          <Arrow 
            points={[
              screenPositionX - 25, 
              screenPositionY - outerNiche / 2 + 3,
              screenPositionX - 25, 
              screenPositionY + monitorHeight + outerNiche / 2 - 3
            ]} 
            stroke="black" 
            strokeWidth={1}
            pointerLength={5} 
            pointerWidth={5}
            fill="black"
            pointerAtBeginning={true}
          />

          {/* Center Dotted Horizontal Line */}
          <Line 
            points={[
              canvasWidth / 7.5, 
              screenPositionY + monitorHeight / 2, 
              canvasWidth / 1.75 * 1.5,
              screenPositionY + monitorHeight / 2
            ]} 
            stroke="black" 
            strokeWidth={1} 
            dash={[4, 2]} 
          />

          {/* Center Dotted Vertical Line */}
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

          {/* Center Position Diagonal Line Label */}
          <Line 
            points={[
              canvasWidth / 2, 
              canvasHeight / 2, 
              canvasWidth / 2 + 55,
              canvasHeight / 2 - 175
            ]} 
            stroke="black" 
            strokeWidth={1} 
          />
          <Line 
            points={[
              canvasWidth / 2 + 55,
              canvasHeight / 2 - 175,
              canvasWidth / 2 + 80,
              canvasHeight / 2 - 175
            ]} 
            stroke="black" 
            strokeWidth={1} 
          />
          <Text 
            x={canvasWidth / 2 + 94}               
              y={canvasHeight / 2 - 186}
              text="Intended"
              fontSize={13} 
              fill="black" 
          />
          <Text 
            x={canvasWidth / 2 + 77} 
            y={canvasHeight / 2 - 169}
            text="Screen Position"
            fontSize={13} 
            fill="black" 
          />

          {/* Receptacle Box Diagonal Line Label */}
          <Line 
            points={[
              canvasWidth / 2 + 6, 
              screenPositionY + monitorHeight - receptacleBoxHeight - 6, 
              canvasWidth / 2 + 44,
              screenPositionY - outerNiche / 2 - 40
            ]} 
            stroke="black" 
            strokeWidth={1} 
          />
          <Line 
            points={[
              canvasWidth / 2 + 44,
              screenPositionY - outerNiche / 2 - 40,
              canvasWidth / 2 + 44 + monitorWidth * 0.1,
              screenPositionY - outerNiche / 2 - 40
            ]} 
            stroke="black" 
            strokeWidth={1} 
          />
          <Text 
            x={canvasWidth / 2 + 42 + monitorWidth * 0.1 + 5}               
            y={screenPositionY - outerNiche / 2 - 54}
            text="Install recessed"
            fontSize={13} 
            fill="black" 
          />
          <Text 
            x={canvasWidth / 2 + 42 + monitorWidth * 0.1 + 8} 
            y={screenPositionY - outerNiche / 2 - 39}
            text="receptacle box"
            fontSize={13}
            fill="black" 
          />

          {/* Top Left Horizontal Line Marker */}
          <Line 
            points={[
              screenPositionX - outerNiche / 2 - 2, 
              screenPositionY - outerNiche / 2, 
              screenPositionX - outerNiche / 2 - 21,
              screenPositionY - outerNiche / 2
            ]} 
            stroke="black" 
            strokeWidth={1} 
          />
          {/* Top Left Vertical Line Marker */}
          <Line 
            points={[
              screenPositionX, 
              screenPositionY - outerNiche / 2 - 2, 
              screenPositionX,
              screenPositionY - outerNiche / 2 - 21
            ]} 
            stroke="black" 
            strokeWidth={1} 
          />

          {/* Bottom Left Horizontal Line Marker */}
          <Line 
            points={[
              screenPositionX - outerNiche / 2 - 2, 
              screenPositionY + monitorHeight + outerNiche / 2, 
              screenPositionX - outerNiche / 2 - 21,
              screenPositionY + monitorHeight + outerNiche / 2
            ]} 
            stroke="black" 
            strokeWidth={1} 
            />
          {/* Bottom Left Vertical Line Marker */}
          <Line 
            points={[
              screenPositionX - outerNiche / 2, 
              screenPositionY + monitorHeight + outerNiche / 2 + 2, 
              screenPositionX - outerNiche / 2,
              screenPositionY + monitorHeight + outerNiche / 2 + 21
            ]} 
            stroke="black" 
            strokeWidth={1} 
          />

          {/* Top Right Horizontal Line Marker */}
          <Line 
            points={[
              screenPositionX + monitorWidth + outerNiche / 2 + 2, 
              screenPositionY, 
              screenPositionX + monitorWidth + outerNiche / 2 + 21,
              screenPositionY
            ]} 
            stroke="black" 
            strokeWidth={1} 
          />
          {/* Top Right Vertical Line Marker */}
          <Line 
            points={[
              screenPositionX + monitorWidth, 
              screenPositionY - outerNiche / 2 - 2, 
              screenPositionX + monitorWidth,
              screenPositionY - outerNiche / 2 - 21
            ]} 
            stroke="black" 
            strokeWidth={1} 
          />

          {/* Bottom Right Horizontal Line Marker */}
          <Line 
            points={[
              screenPositionX + monitorWidth + outerNiche / 2 + 2, 
              screenPositionY + monitorHeight, 
              screenPositionX + monitorWidth + outerNiche / 2 + 21,
              screenPositionY + monitorHeight
            ]} 
            stroke="black" 
            strokeWidth={1} 
          />
          {/* Bottom Right Vertical Line Marker */}
          <Line 
            points={[
              screenPositionX + monitorWidth + outerNiche / 2, 
              screenPositionY + monitorHeight + outerNiche / 2 + 2, 
              screenPositionX + monitorWidth + outerNiche / 2,
              screenPositionY + monitorHeight + outerNiche / 2 + 21
            ]} 
            stroke="black" 
            strokeWidth={1} 
          />

          {/* Floor Line Distance Label (Position: Left Center) */}
          <Rect
            x={screenPositionX * 0.1} 
            y={screenPositionY * 1.35}
            width={60}
            height={40}
            fill="#f5f5f5"
            stroke="black"
            strokeWidth={1}
          />
          <Text 
            x={screenPositionX * 0.1 + 21} 
            y={screenPositionY * 1.35 + 16}
            text={state.floorLine + `"`}
            fontSize={12} 
            fill="black" 
          />
          
          {/* Title under floor distance box (Position: Left Bottom */}
          <Text 
            x={screenPositionX * 0.1 - 5} 
            y={screenPositionY * 1.35 + 48}
            text={`Centerline of`}
            fontSize={12} 
            fill="black" 
          />
          <Text 
            x={screenPositionX * 0.1 + 9} 
            y={screenPositionY * 1.35 + 64}
            text={`Display`}
            fontSize={12} 
            fill="black" 
          />

          {/* Vertical Floor Distance Line */}
          <Arrow 
            points={[
              floorLineX * 0.5, 
              screenPositionY + monitorHeight / 2 + 20, 
              floorLineX * 0.5, 
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
              floorLineX * 0.5, 
              floorLine + 14,
              floorLineX * 2, 
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
