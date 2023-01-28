import React from 'react'
import {Form  ,Input , Button} from 'antd'
import { Card } from 'react-bootstrap';
import axios from 'axios'
import toast from 'react-hot-toast'

const Register = () => {
  const submitHandler = async(value) =>{
    try {
      const response = await axios.post('/api/user/register',value)
      if(response.data){
        toast.success("Success");
      }
      else{
        toast.error('Errrror')
      }
    } catch (error) {
      console.log("exit")
     
    }
  }
  return (
    <div className="center">
      <Card style={{ width: '18rem' }} className="child-center"> 
      <Form layout='vertical' onFinish={submitHandler}>
        <Form.Item label='Name' name='name'>
          <Input placeholder='name' />
        </Form.Item>
        <Form.Item label='Email' name='email'>
          <Input placeholder='email' />
        </Form.Item>
        <Form.Item label='Phone Number' name='phoneNumber'>
          <Input placeholder='phoneNumber' />
        </Form.Item>
        <Form.Item label='Password' name='password'>
          <Input placeholder='password' type='password'/>
        </Form.Item>
        <Button variant="primary mb-3" htmlType='submit'>Register</Button>
      </Form>
      <Card.Body></Card.Body>
      </Card>
    </div>

  )
}

export default Register