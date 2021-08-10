import React from 'react'
import {AuthProvider} from "./authContext";

interface props{

}

export const AppProviders:React.FC<props>=(props)=>{
    return (
        <AuthProvider>
            {props.children}
        </AuthProvider>
    )
}