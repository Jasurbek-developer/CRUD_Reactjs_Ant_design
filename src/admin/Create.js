import { Button, Card, Form, Input } from 'antd'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Create = () => {
    const [id, setId] = useState("")
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastname] = useState("")
    const [role, setRole] = useState("")
    const [data, setData] = useState({})
    const navigate= useNavigate()
    

    const handleSubmit=()=>{
        const data={id,first_name,last_name,role};
        fetch(`https://6420342c82bea25f6dfc0e94.mockapi.io/rc/users`,{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
        })
        .then((res)=> res.json())
        .then((result)=>{
        if (first_name.length && last_name.length && role.length) {
            navigate("/admin")
        }
        }).catch((err)=>{
            console.log(err.message);
        })
    }
  return (
    <Card style={{width:1000, padding:50, display:"flex", flexDirection:"column"}}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            autoComplete="off"
            onSubmitCapture={handleSubmit}
        >
            <Form.Item
            label="ID"
            name="id"
            >
            <Input value={id} disabled />
            </Form.Item>
            <Form.Item
            label="First Name"
            name="firstname"
            rules={[{ required: true, message: 'Please input firstname!' }]}
            >
            <Input value={first_name} onChange={e=>setFirstName(e.target.value)} />
            </Form.Item>

            <Form.Item
            label="Last Name"
            name="lastname"
            rules={[{ required: true, message: 'Please input lastname!' }]}
            >
            <Input  value={last_name} onChange={e=>setLastname(e.target.value)} />
            </Form.Item>
            <Form.Item
            label="Rules"
            name="rules"
            rules={[{ required: true, message: 'Please input rules!' }]}
            >
            <Input  value={role} onChange={e=>setRole(e.target.value)} />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
                Save
            </Button>
            <Link to={"/admin"}>
                <Button type="primary" style={{marginLeft:30}}>
                    Back
                </Button>
            </Link>
            </Form.Item>
        </Form>
    </Card>
    
  )
}

export default Create