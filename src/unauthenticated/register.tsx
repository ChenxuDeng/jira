import React from 'react'
import {useAuth} from "../context/authContext";
import {Button, Form, Input} from "antd";

interface props{

}

const apiUrl = process.env.REACT_APP_API_URL;

const Register:React.FC<props>=(props)=>{
    const {register,user}=useAuth()

    const submitHandler=(values:{username:string,password:string})=>{
        register(values)
    }

    return (
        <Form onFinish={submitHandler}>
            <Form.Item name={'username'} rules={[{required:true,message:'请输入用户名'}]}>
                <Input placeholder={'用户名'} type="text" id={'username'}/>
            </Form.Item>
            <Form.Item name={'password'} rules={[{required:true,message:'请输入密码'}]}>
                <Input placeholder={'密码'} type="text" id={'password'}/>
            </Form.Item>
            <Form.Item>
                <Button type={'primary'} htmlType={'submit'} style={{backgroundColor:'rgb(0,82,204)',width:'100%'}}>
                    注册
                </Button>
            </Form.Item>
        </Form>
    )
}

export default Register