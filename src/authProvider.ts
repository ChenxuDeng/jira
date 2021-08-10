const localStorageKey='__auth_provider_token__'

export const getToken=()=>{
    return window.localStorage.getItem(localStorageKey)
}

//把服务器返回的token存到localstorage，名称为__auth_provider_token__
export const handleUserResponse=({user}:{user:{id:number,name:string,token:string}})=>{
    window.localStorage.setItem(localStorageKey,user.token || '')
    return user
}

//向服务器发送用户名密码,服务器返回token
export const login=(data:{username:string,password:string})=>{
    return fetch('http://localhost:3001/login',{
        method:'POST',
        headers:{
            'Content-Type':'application.json'
        },
        body:JSON.stringify(data)
    }).then(async (response)=>{
        if(response.ok){
            return handleUserResponse(await response.json())
        }else {
            return Promise.reject(data)
        }
    })
}

export const register=(data:{username:string,password:string})=>{
    return fetch('http://localhost:3001/register',{
        method:'POST',
        headers:{
            'Content-Type':'application.json'
        },
        body:JSON.stringify(data)
    }).then(async (response)=>{
        if(response.ok){
            return handleUserResponse(await response.json())
        }else {
            return Promise.reject(data)
        }
    })
}

export const logout=async ()=>{
    window.localStorage.removeItem(localStorageKey)
}
