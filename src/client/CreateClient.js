import { Button, Card, Form, Input } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

const CreateClient = () => {
    const [id, setId] = useState("")
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastname] = useState("")
    const [age, setAge] = useState("")
    const [course, setCourse] = useState("")
    const [location, setLocation] = useState("")
    const navigate= useNavigate()
    

    const handleSubmit=()=>{
        const data={id,first_name,last_name,age,location,course};
        fetch("https://6420342c82bea25f6dfc0e94.mockapi.io/rc/clients",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
        })
        .then((res)=> res.json())
        .then((result)=>{
            console.log(result);
        if (first_name.length && last_name.length && location.length  && course.length && age.length) {
            navigate("/client")
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
            label="Age"
            name="age"
            rules={[{ required: true, message: 'Please input age!' }]}
            >
            <Input  value={age} onChange={e=>setAge(e.target.value)} type="number" />
            </Form.Item>
            <Form.Item
            label="Location"
            name="location"
            rules={[{ required: true, message: 'Please input location!' }]}
            >
            <Input  value={location} onChange={e=>setLocation(e.target.value)} />
            </Form.Item>
            <Form.Item
            label="Course"
            name="course"
            rules={[{ required: true, message: 'Please input location!' }]}
            >
            <Input  value={course} onChange={e=>setCourse(e.target.value)} />
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

export default CreateClient