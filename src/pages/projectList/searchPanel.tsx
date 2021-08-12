import React, {useState,useEffect} from 'react';
import {Input,Select} from "antd";

interface props{
    user:{id:number,name:string}[]
    param:{name:string,personId:string}
    setParam:(param:props['param'])=>void
}

const SearchPanel:React.FC<props>=(props)=>{
    return (
        <form>
            <div>
                <Input type="text" value={props.param.name} onChange={(event)=>{
                    return props.setParam({
                        ...props.param,
                        name:event.target.value
                    })
                }}/>
                <Select value={props.param.personId} onChange={(value)=>{
                    return props.setParam({
                        ...props.param,
                        personId: value
                    })
                }}>
                    <Select.Option value="">负责人</Select.Option>
                    {
                        props.user.map((item)=>{
                            return <Select.Option value={item.id} key={item.id}>
                                {item.name}
                            </Select.Option>
                        })
                    }
                </Select>
            </div>
        </form>
    );
}

export default SearchPanel;