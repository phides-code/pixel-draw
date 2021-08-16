import React, { useState } from "react";
import styled from "styled-components";

const buildGrid = () => {
  const HEIGHT = 16; 
  const WIDTH = 16;
  const myGrid = [];

  for (let i = 0; i < (HEIGHT * WIDTH); i++) {
    myGrid.push({
      num: i,
      color: "white"
    });
  }

  return myGrid;
};

const palette = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "pink",
  "white",
  "grey",
  "black"
  ];

const Home = () => {
  const [grid, setGrid] = useState(buildGrid());
  const [selectedColor, setSelectedColor] = useState("white");

  const fillColor = (ev) => {
    ev.preventDefault();
    console.log(`clicked on ${ev.target.id}`);
    console.log(`filling with ${selectedColor}`);

    let newArr = [...grid];
    newArr[ev.target.id] = {
      num: ev.target.id,
      color: selectedColor
    };

    setGrid(newArr);
  };

  return (
    <Wrapper>
      <Canvas>
        <Grid id="grid">
          {
            grid.map(square => {
              return (
                <Square
                  id={square.num}
                  key={square.num}
                  style={{backgroundColor: square.color}}
                  onClick={fillColor}
                />
              )
            })
          }
        </Grid>
        <Palette>
          {
            palette.map(color => {
              return (
                <PickerWrapper>
                  <PaintBrush>
                    {(selectedColor === color) && <>🖌</>}
                  </PaintBrush>
                  <ColorSquare
                    id={color}
                    key={color}
                    style={{backgroundColor: color}}
                    onClick={() =>{
                      setSelectedColor(color);
                      console.log(`set color ${color}`);
                    }}
                  />
                </PickerWrapper>
              )
            })
          }
        </Palette>
      </Canvas>
      <Preview>
        <MiniGrid id="minigrid">
          {
            grid.map(square => {
              return (
                <MiniSquare
                  key={square.num}
                  style={{backgroundColor: square.color}}
                />
              )
            })
          }
        </MiniGrid>
      </Preview>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: center;
	align-content: stretch;
`;

const Preview = styled.div`
  border: 1px solid black;
  margin-top: 10px;
  border-radius: 5px;
`;

const MiniGrid = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: stretch;
	align-content: stretch;
  max-width: 96px;
`;

const MiniSquare = styled.div`
  height: 6px;
  width: 6px;
  display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	align-content: stretch;
`;

const Canvas = styled.div`
  display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: stretch;
	align-content: stretch;
  background-color: lightblue;
  padding: 10px;
  border-radius: 5px;
`;

const PaintBrush = styled.div`
  font-size: xx-large;
  margin-right: 10px;
`;

const PickerWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
	align-content: stretch;
`;

const Palette = styled.div`
  margin-left: 32px;
`;

const Grid = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: stretch;
	align-content: stretch;
  max-width: 544px;
`;

const Square = styled.div`
  height: 32px;
  width: 32px;
  border: 1px solid black;
  display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	align-content: stretch;
  transition: transform .2s;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const ColorSquare = styled(Square)`
  height: 48px;
  width: 48px;
`;

export default Home;