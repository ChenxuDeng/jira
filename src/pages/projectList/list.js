import React from 'react';

function List(props) {
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