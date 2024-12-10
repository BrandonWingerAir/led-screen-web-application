import { useContext } from 'react';
import DataContext from './../../../DataContext.jsx';
import { Stage, Layer, Rect, Line, Text } from 'react-konva';
  
  const Diagram = () => {
  const { state } = useContext(DataContext);

  let width = state.selectedScreen.Width;
  let height = state.selectedScreen.Height;
  let canvasWidth = window.innerWidth / 2;
  let canvasHeight = window.innerHeight - 250;

  switch (true) {
    case width > 500:
      width /= 1.85;
      height /= 1.85;
      break;
    case width > 100:
      width *= 2.75;
      height *= 2.75;
      break;
    case width > 50:
      width *= 4;
      height *= 4;
      break;
    case width > 20:
      width *= 6;
      height *= 6;
      break;
    default:
      width *= 25;
      height *= 25;
  }

  let centerWidth = (canvasWidth - width) / 2;
  let centerHeight = (canvasHeight - height) / 2;

  return (
    <Stage width={canvasWidth} height={canvasHeight}>
      <Layer>
        <Rect
          x={centerWidth}
          y={centerHeight}
          width={width}
          height={height}
          fill="white"
          stroke="black"
          strokeWidth={2}
        />

        <Rect
          x={centerWidth + 20}
          y={centerHeight + 20}
          width={width - 40}
          height={height - 40}
          fill="white"
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
