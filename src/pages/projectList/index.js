import React, {useEffect, useState} from 'react';
import SearchPanel from "./searchPanel";
import List from "./list";
import qs from 'qs'
import {cleanObject, useDidMount, useDebounce} from "../../utilities";

function ProjectList(props) {
    const [param,setParam]=useState({
        name:'',
        personId:''
    })
    const [user,setUser]=useState([])
    const [list,setList]=useState([])

    const debouncedParam=useDebounce(param,1000) //在delay的时间后debounceParam才会变触发useEffect达到防抖的目的

    useEffect(() => {
        //http://localhost:3001/projects?name=${param.name}&personId=${param.personId}
        fetch(`http://localhost:3001/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async (response)=>{
            if(response.ok){
                setList(await response.json())
            }
        })
    }, [debouncedParam]) //在delay的时间后debounceParam才会变触发useEffect达到防抖的目的

    useDidMount(()=>{
        fetch('http://localhost:3001/users').then(async (response)=>{
            if(response.ok){
                setUser(await response.json())
            }
        })
    })

    return (
        <div>
            <SearchPanel param={param} setParam={setParam} user={user}/>
            <List list={list} user={user}/>
        </div>
    );
}

export default ProjectList;