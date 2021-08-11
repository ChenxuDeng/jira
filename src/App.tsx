import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectList from "./pages/projectList";
import {TsReactTest} from "./pages/tryUseArray";
import {useAuth} from "./context/authContext";
import {Authenticated} from "./authenticated";
import {Unauthenticated} from "./unauthenticated";

function App() {
    const {user}=useAuth()
  return (
    <div className="App">
        {/*<ProjectList/>*/}
        {/*<TsReactTest/>*/}
        {user?<Authenticated/>:<Unauthenticated/>}
    </div>
  );
}

export default App;
