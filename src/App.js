
import './App.css';
import {useEffect} from "react";
import axios from "axios";

import { ThemeProvider } from 'theme-ui'
import { theme } from './theme'
import Login from "./components/login/login";


function App() {
  return (
      <ThemeProvider theme={theme}>
          <Login/>
      </ThemeProvider>
  );
}

export default App;
