import React, {useState,useEffect} from 'react';

interface props{
    user:{id:number,name:string}[]
    param:{name:string,personId:string}
    setParam:(param:props['param'])=>void
}

const SearchPanel:React.FC<props>=(props)=>{
    return (
        <form>
            <div>
                <input type="text" value={props.param.name} onChange={(event)=>{
                    return props.setParam({
                        ...props.param,
                        name:event.target.value
                    })
                }}/>
                <select value={props.param.personId} onChange={(event)=>{
                    return props.setParam({
                        ...props.param,
                        personId: event.target.value
                    })
                }}>
                    <option value="">负责人</option>
                    {
                        props.user.map((item)=>{
                            return <option value={item.id} key={item.id}>
                                {item.name}
                            </option>
                        })
                    }
                </select>
            </div>
        </form>
    );
}

export default SearchPanel;