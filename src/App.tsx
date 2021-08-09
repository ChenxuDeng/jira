import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectList from "./pages/projectList";
import {TsReactTest} from "./pages/tryUseArray";
import Login from "./pages/login/login";
import {useAuth} from "./context/authContext";
import {Authentivated} from "./authentivated";
import {Unauthenticated} from "./unauthenticated";

function App() {
    const {user}=useAuth()
  return (
    <div className="App">
        {/*<ProjectList/>*/}
        {/*<TsReactTest/>*/}
        {user?<Authentivated/>:<Unauthenticated/>}
    </div>
  );
}

export default App;
