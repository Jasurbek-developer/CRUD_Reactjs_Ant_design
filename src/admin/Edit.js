import { Button, Card, Form, Input, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
const{Title}=Typography


const Edit = () => {
    const {empid}=useParams()
    const[loader,setLoader]=useState(true)
  useEffect(() => {
    fetch(`https://6420342c82bea25f6dfc0e94.mockapi.io/rc/users/${empid}`).then((res)=>{
      return res.json()
    }).then((resp)=>{
      setLoader(false)
      setId(resp.id)
      setLastname(resp.last_name)
      setFirstName(resp.first_name)
      setRole(resp.role)
    }).catch((err)=>{
      console.log(err.message)
    })
  }, [])
    const [id, setId] = useState("")
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastname] = useState("")
    const [role, setRole] = useState("")
    const navigate= useNavigate()
    

    const handleSubmit=()=>{
        const data={id,first_name,last_name,role};
        fetch(`https://6420342c82bea25f6dfc0e94.mockapi.io/rc/users/${empid}`,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
        })
        .then((res)=> res.json())
        .then((result)=>{
            console.log(result);
        if (first_name.length && last_name.length && role.length) {
            navigate("/admin")
        }
        }).catch((err)=>{
            console.log(err.message);
        })
    }
  return(
    <Card style={{width:800, paddingTop:50,paddingBottom:30, display:"flex", flexDirection:"column"}}>
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
            <input type="text" value={id} className='hidden-input'/>
            </Form.Item>
            <Form.Item
            label="First Name"
            name="firstname"
            >
            <Input value={first_name} onChange={e=>setFirstName(e.target.value)}/>
            <input type="text" value={first_name} className='hidden-input'/>

            </Form.Item>

            <Form.Item
            label="Last Name"
            name="lastname"
            >
            <Input  value={last_name} onChange={e=>setLastname(e.target.value)} />
            <input type="text" value={last_name} className='hidden-input'/>

            </Form.Item>
            <Form.Item
            label="Rules"
            name="rules"
            >
            <Input  value={role} onChange={e=>setRole(e.target.value)} />
            <input type="text" value={role} className='hidden-input'/>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" style={{width:120,height:35}}>
                Save
            </Button>
            <Link to={"/admin"}>
                <Button type="dashed" style={{marginLeft:30,width:120,height:36}}>
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

export default Edit