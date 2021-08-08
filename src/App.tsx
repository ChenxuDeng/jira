import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectList from "./pages/projectList";
import {TsReactTest} from "./pages/tryUseArray";
import Login from "./pages/login/login";

function App() {
  return (
    <div className="App">
        {/*<ProjectList/>*/}
        {/*<TsReactTest/>*/}
        <Login/>
    </div>
  );
}

export default App;
