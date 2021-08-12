import React from 'react';
import {Table} from "antd";

interface props{
    list:{id:number,name:string,personId:number,organization:string,created:number}[]
    user:{id:number,name:string}[]
}

const List:React.FC<props>=(props)=>{

    return <Table pagination={false} columns={[{
        title:'名称',
        dataIndex:'name',
        sorter:(a,b)=>a.name.localeCompare(b.name) //按照首字母排序，localeCompare针对中文排序
    },{
        title:'负责人',
        render(value,project){
            return (
                <span>
                    {props.user.find((user)=>{
                        return user.id===project.personId //?.name || 'unknown'不这么写会报错
                    })?.name || 'unknown'}
                </span>
            )
        }
    }]} dataSource={props.list}/>
}

export default List;