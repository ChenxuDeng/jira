import React from 'react'
import qs from 'qs'
import * as auth from '../authProvider'

interface Config extends RequestInit{
    token:string
    data:object
}

export const http=async (endpoint:string,{data,token,headers,...customConfig}:Config)=>{
    const config={
        method:'GET',
        headers:{
            Authorization:token?`Bearer${token}`:'',
            'Content-Type':data?'application/json':''
        },
        ...customConfig
    }
    if(config.method.toUpperCase()==='GET'){
        endpoint+=`?${qs.stringify(data||{})}`
    }else {
        config.body=JSON.stringify(data||{}) //除了get配置中都要有body属性=JSON.stringify(data)
    }
    return window.fetch(`http://localhost:3001/${endpoint}`,config).then(async (response)=>{
        if(response.status===401){
            await auth.logout()
            window.location.reload()
            return Promise.reject({message:'请重新登陆'})
        }
        const data=await response.json()
        if(response.ok){
            return data
        }else{
            return Promise.reject(data)
        }
    })
}