import { useContext } from 'react';
import DataContext from './../../../DataContext.jsx';
import { Stage, Layer, Rect, Line, Text } from 'react-konva';
  
  const Diagram = () => {
  const { state } = useContext(DataContext);

  let width = state.selectedScreen.Width;
  let height = state.selectedScreen.Height;

  switch (true) {
    case width > 500:
      width /= 1.5;
      height /= 1.5;
      break;
    case width > 100:
      width *= 3;
      height *= 3;
      break;
    case width > 50:
      width *= 6;
      height *= 6;
      break;
    case width > 20:
      width *= 8;
      height *= 8;
      break;
    default:
      width *= 25;
      height *= 25;
  }

  return (
    <Stage width={window.innerWidth / 2} height={window.innerHeight - 250}>
      <Layer>
        <Rect
          x={50}
          y={50}
          width={width}
          height={height}
          fill="white"
          stroke="black"
          strokeWidth={2}
        />

        <Line
          points={[50, 50, 50 + width, 50]}
          stroke="black"
          strokeWidth={1}
          dash={[4, 2]}
        />
        <Line
          points={[50, 50, 50, 50 + height]}
          stroke="black"
          strokeWidth={1}
          dash={[4, 2]}
        />
        <Line
          points={[50 + width, 50, 50 + width, 50 + height]}
          stroke="black"
          strokeWidth={1}
          dash={[4, 2]}
        />
        <Line
          points={[50, 50 + height, 50 + width, 50 + height]}
          stroke="black"
          strokeWidth={1}
          dash={[4, 2]}
        />

        <Text 
          x={50 + width / 2 - 19} 
          y={30} 
          text={`${state.selectedScreen.Width}` + ` "`} 
          fontSize={14} 
          fill="black" 
        />

        <Text 
          x={width + 56} 
          y={50 + height / 2 - 8} 
          text={`${state.selectedScreen.Height}` + ` "`} 
          fontSize={14} 
          fill="black" 
        />
      </Layer>
    </Stage>
  );
};

export default Diagram;
