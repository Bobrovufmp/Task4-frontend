import React from 'react';
import {Route, Routes} from "react-router-dom";
import PrivateRoute from "./utils/route/privateRoute";
import AuthRootComponent from "./components/auth/AuthRootComponent";
import {ColorModeContext, useMode} from "./theme/theme";
import {ThemeProvider, CssBaseline} from "@mui/material";
import LayoutComponent from "./components/layout/layoutComponent";
import HomePage from "./pages/homePage/homePage";
import UsersPage from "./pages/users/usersPage";

function App() {
    const [theme, colorMode] = useMode()
  return (
      <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
              <CssBaseline/>
                      <Routes>
                          <Route element={<LayoutComponent/>}>
                              <Route element={<PrivateRoute/>}>
                                  <Route path='/home' element={<HomePage/>}/>
                                  <Route path='/users' element={<UsersPage/>}/>
                              </Route>
                              <Route/>
                              <Route path='/login' element={<AuthRootComponent/>}/>
                              <Route path='/register' element={<AuthRootComponent/>}/>
                          </Route>
                      </Routes>
          </ThemeProvider>
      </ColorModeContext.Provider>
  );
}


export default App;
