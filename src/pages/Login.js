import React from 'react'
import { Button, Form, Input, Select } from 'antd';
import {link,usenavigate} from 'react-dom'
import { Card } from 'react-bootstrap';
import axios from 'axios'
import toast from 'react-hot-toast'
import { useCookies } from 'react-cookie';

const Login = () => {
  const [cookies, setCookie] = useCookies(['token']);
  const submitHandler = async(value) =>{
    try {
      const response = await axios.post('/api/user/login',value)
      console.log(response)
      if(response.data.success){
        setCookie('token',response.data.token, { path: '/api/user/login' });
        toast("Login Success");
      }
    } catch (error) {
      
    }
  }
  return (
    <div className="center">
      <Card style={{ width: '18rem' }} className="child-center"> 
      <Form layout='vertical' onFinish={submitHandler}>
      <Form.Item label='Phone Number' name='phoneNumber'>
          <Input placeholder='phoneNumber' />
        </Form.Item>
        <Form.Item label='Password' name='password'>
          <Input placeholder='password' type='password'/>
        </Form.Item>
        <Button variant="primary mb-3" htmlType='submit'>Login</Button>
      </Form>
      <Card.Body></Card.Body>
      </Card>
    </div>
  )
}

export default Login