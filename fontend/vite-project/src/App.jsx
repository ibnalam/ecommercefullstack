import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from "axios"



function App() {
  
  const onFinish = async (values) => {


    console.log('Success:', values);
    let data = await axios.post("http://localhost:8000/createuser", {
      username: values.username,
      email: values.email,
      password: values.password
    })
  console.log(data)



  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
     >
    <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
      >
      <Input />
    </Form.Item>
    <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
      >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        
      ]}
    >
      <Input.Password />
    </Form.Item>

  

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        sign up 
      </Button>
    </Form.Item>
  </Form>
    </>
  )
}

export default App
