import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Provider from "react-redux/es/components/Provider";
import { useSelector } from "react-redux";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";

import Home from "./blockchain/games";
import Details from "./blockchain/games/details";
import NoMatch from "./blockchain/games/NoMatch";
import { store } from "./app/store";
export const ThemeContext = React.createContext(undefined);

function App() {
  const mode = useSelector((state) => state.ui.mode);
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: mode,
          fontFamily: `apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
          primary: {
            main: mode === "dark" ? "#e8e8e8" : "#3b3b3b",
            backgroundColor: mode === "dark" ? "#212121" : "#fff",
          },
        },
      }),
    [mode]
  );
  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={mode}>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/new-blockchaingames" component={Home} />
              <Route exact path="/blockchaingame/:id" component={Details} />
              {/* <Route
                exact
                path="/blockchaingames/:platform/:category/:status/:device/:nft/:p2e/:f2p"
                component={Home}
              /> */}
              <Route exact path="/" component={Home} />
              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </Router>
        </Provider>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
