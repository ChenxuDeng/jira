import React from 'react'
import ProjectList from "./pages/projectList";
import {useAuth} from "./context/authContext";

export const Authentivated=()=>{
    const {logout}=useAuth()
    return (
        <div>
            <button onClick={logout}>登出</button>
            <ProjectList/>
        </div>
    )
}