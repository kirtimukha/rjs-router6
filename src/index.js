import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import router from "./Router";
/*import {RecoilRoot} from "recoil";*/
import {ThemeProvider} from "styled-components";
import {darkTheme} from "./theme";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<ThemeProvider theme={darkTheme } />*/}
    {/*<RecoilRoot>*/}
      <ThemeProvider theme={darkTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
  {/*  </RecoilRoot>*/}
  </React.StrictMode>
);
