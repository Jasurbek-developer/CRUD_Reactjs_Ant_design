import { Button, Card, Form, Input, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
const{Title}=Typography

const EditClient = () => {
    const [loader, setLoader] = useState(true)
    const {empid}=useParams()
    useEffect(() => {
        fetch(`https://6420342c82bea25f6dfc0e94.mockapi.io/rc/clients/${empid}`).then((res)=>{
            return res.json()
        }).then((resp)=>{
            setLoader(false)
            setId(resp.id)
            setFirstName(resp.first_name)
            setLastname(resp.last_name)
            setAge(resp.age)
            setLocation(resp.location)
            setCourse(resp.course)
        }).catch((err)=>{
            console.log(err.message)
        })
    }, [])
    const [first_name, setFirstName] = useState("")
    const [id, setId] = useState("")
    const [last_name, setLastname] = useState("")
    const [age, setAge] = useState("")
    const [course, setCourse] = useState("")
    const [location, setLocation] = useState("")
    const navigate= useNavigate()
    

    const handleSubmit=()=>{
        const data={id,first_name,last_name,age,location,course};
        fetch(`https://6420342c82bea25f6dfc0e94.mockapi.io/rc/clients/${empid}`,{
            method:"PUT",
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
    <Card style={{width:800,paddingTop:50,paddingBottom:30, display:"flex", flexDirection:"column"}}>
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
            <input value={id} disabled  className='hidden-input'/>
            </Form.Item>
            <Form.Item
            label="First Name"
            name="firstname"
            >
            <Input value={first_name} onChange={e=>setFirstName(e.target.value)} />
            <input value={first_name} onChange={e=>setFirstName(e.target.value)} className='hidden-input'/>
            </Form.Item>

            <Form.Item
            label="Last Name"
            name="lastname"
            >
            <Input  value={last_name} onChange={e=>setLastname(e.target.value)} />
            <input value={last_name} onChange={e=>setLastname(e.target.value)} className='hidden-input'/>

            </Form.Item>
            <Form.Item
            label="Age"
            name="age"
            >
            <Input  value={age} onChange={e=>setAge(e.target.value)} type="number" />
            <input value={age} onChange={e=>setAge(e.target.value)} className='hidden-input' type="number"/>

            </Form.Item>
            <Form.Item
            label="Location"
            name="location"
            >
            <Input  value={location} onChange={e=>setLocation(e.target.value)} />
            <input value={location} onChange={e=>setLocation(e.target.value)} className='hidden-input'/>
            </Form.Item>
            <Form.Item
            label="Course"
            name="course"
            >
            <Input  value={course} onChange={e=>setCourse(e.target.value)} />
            <input value={course} onChange={e=>setCourse(e.target.value)} className='hidden-input'/>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" style={{width:120, height:35}}>
                Save
            </Button>
            <Link to={"/client"}>
                <Button type="dashed" style={{marginLeft:30,width:120, height:36}}>
                    Back
                </Button>
            </Link>
            </Form.Item>
        </Form>
        {loader && 
        <div className='loader'>
          <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>}
    </Card>
  )
}

export default EditClient