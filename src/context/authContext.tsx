import React, {ReactNode, useContext, useState} from 'react'
import * as auth from '../authProvider'
import {http} from "../utilities/http";
import {useDidMount} from "../utilities";

interface props{
    username:string,
    password:string
}

const bootstrapUser=async ()=>{
    let user=null
    const token=auth.getToken()
    if(token){
        const data=await http('me',{token})
        user=data.user
    }
    return user
}

const AuthContext=React.createContext<{
    user:{id:number,name:string,token:string}|null,
    register:(form:props)=>Promise<void>
    login:(form:props)=>Promise<void>
    logout:()=>Promise<void>
}|undefined>(undefined)
AuthContext.displayName='AuthContext'

export const AuthProvider=({children}:{children:ReactNode})=>{
    const [user,setUser]=useState<{id:number,name:string,token:string}|null>(null)

    const login=(form:props)=>{
        return auth.login(form).then((response)=>{
            setUser(response)
        })
    }
    const register=(form:props)=>{
        return auth.register(form).then((response)=>{
            setUser(response)
        })
    }
    const logout=()=>{
        return auth.logout().then(()=>{
            setUser(null)
        })
    }

    useDidMount(()=>{
        bootstrapUser().then(setUser)
    })

    return (
        <AuthContext.Provider children={children} value={{user,login,register,logout}}/>
    )
}

export const useAuth=()=>{
    const context = useContext(AuthContext);
    if(!context){
        throw new Error('useAuth必须在AuthProvider中使用')
    }
    return context
}