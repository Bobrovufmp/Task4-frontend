import React from 'react';
import Home from "./components/Home";
import {Route, Routes} from "react-router-dom";
import PrivateRoute from "./utils/route/privateRoute";
import AuthRootComponent from "./components/auth/AuthRootComponent";
import {ColorModeContext, useMode} from "./theme/theme";
import {ThemeProvider, CssBaseline} from "@mui/material";
import LayoutComponent from "./components/layout/layoutComponent";

function App() {
    const [theme, colorMode] = useMode()
  return (
      <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
              <CssBaseline/>
              <LayoutComponent>
                  <div className="app">
                      <Routes>
                          <Route element={<PrivateRoute />}>
                              <Route path='/home' element={<Home/>}/>
                          </Route>
                          <Route path='login' element={<AuthRootComponent/>}/>
                          <Route path='register' element={<AuthRootComponent/>}/>
                      </Routes>
                  </div>
              </LayoutComponent>
          </ThemeProvider>
      </ColorModeContext.Provider>
  );
}


export default App;