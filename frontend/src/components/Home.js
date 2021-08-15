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
              <PaletteSquare
                id={color}
                key={color}
                style={{backgroundColor: color}}
                onClick={() =>{
                  setSelectedColor(color);
                  console.log(`set color ${color}`);
                }}
              />
            )
          })
        }
      </Palette>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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

const Palette = styled.div`
  margin-left: 64px;

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

const PaletteSquare = styled(Square)`
  height: 48px;
  width: 48px;
`;

export default Home;