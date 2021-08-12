import React from 'react'
import {useAuth} from "../context/authContext";
import {Form,Input,Button} from "antd";

interface props{

}

const apiUrl = process.env.REACT_APP_API_URL;

const Login:React.FC<props>=(props)=>{
    const {login,user}=useAuth()

    const submitHandler=(values:{username:string,password:string})=>{
        login(values)
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
                    登录
                </Button>
            </Form.Item>
        </Form>
    )
}

export default Login