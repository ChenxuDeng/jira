//处理0的情况,因为不希望把0的情况也删除
import {useEffect, useState} from "react";

export const isFalsy=(value)=>{
    return value===0?false:!value //两个叹号可以把value转化为boolean
}

//把对象中的空值删除
export function cleanObject(obj) {
    const result={...obj}
    Object.keys(result).forEach((key)=>{
        const value=result[key]
        if(isFalsy(value)){
            delete result[key]
        } //如果value为null undefined则删除
    })
    return result
}

export const useDidMount=(fn)=>{
    useEffect(()=>{
        fn()
    },[])
}

export const useDebounce=(value,delay)=>{
    const [debouncedValue,setDebouncedValue]=useState(value)
    useEffect(()=>{
        //在每次value变化后设置定时器
        let timer=setTimeout(()=>{
            setDebouncedValue(value)
        },delay)
        //每次在上一个useEffect处理完成运行
        return ()=>{
            clearTimeout(timer) //比如说连续输入a,b, b的输入会触发clearTimeout清空a设置的定时器，重新设定定时器
        }
    },[value,delay])
    return debouncedValue
}