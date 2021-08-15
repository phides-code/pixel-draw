import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Home from "./Home";

const App = () => {

  return (
    <Wrapper>
      <BrowserRouter>
        <GlobalStyles />
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>

            <Route path="">404: Oops!</Route>
          </Switch>
      </BrowserRouter>
    </Wrapper>
  );
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: stretch;
	align-content: stretch;
`;

export default App;
