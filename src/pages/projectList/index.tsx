import React, {useEffect, useState} from 'react';
import SearchPanel from "./searchPanel";
import List from "./list";
import qs from 'qs'
import {cleanObject, useDidMount, useDebounce} from "../../utilities";
import {useHttp} from "../../utilities/http";

interface props{

}

const ProjectList:React.FC<props>=(props)=>{
    const [param,setParam]=useState({
        name:'',
        personId:''
    })
    const [user,setUser]=useState([])
    const [list,setList]=useState([])
    const client=useHttp()

    const debouncedParam=useDebounce(param,200) //在delay的时间后debounceParam才会变触发useEffect达到防抖的目的

    useEffect(() => {
        //http://localhost:3001/projects?name=${param.name}&personId=${param.personId}
        client('projects',{data:cleanObject(debouncedParam)}).then(setList)
    }, [debouncedParam]) //在delay的时间后debounceParam才会变触发useEffect达到防抖的目的

    // @ts-ignore
    useDidMount(()=>{
        client('users').then(setUser)
    })

    return (
        <div>
            <SearchPanel param={param} setParam={setParam} user={user}/>
            <List list={list} user={user}/>
        </div>
    );
}

export default ProjectList;