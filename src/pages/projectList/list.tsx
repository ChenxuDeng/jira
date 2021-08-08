import React from 'react';

interface props{
    list:{id:number,name:string,personId:number,organization:string,created:number}[]
    user:{id:number,name:string}[]
}

const List:React.FC<props>=(props)=>{
    return (
        <table>
            <thead>
            <tr>
                <th>
                    名称
                </th>
                <th>
                    负责人
                </th>
            </tr>
            </thead>
            <tbody>
            {
                props.list.map((item)=>{
                    return (
                        <tr key={item.id}>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {props.user.find((user)=>{
                                    return user.id===item.personId //?.name || 'unknown'不这么写会报错
                                })?.name || 'unknown'}
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    );
}

export default List;