import { Button, Card, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
const {Title,Text}=Typography;
const Deatils = () => {
  const {empid}=useParams()
  const [data, setData] = useState({})
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    fetch(`https://6420342c82bea25f6dfc0e94.mockapi.io/rc/users/${empid}`).then((res)=>{
      return res.json()
    }).then((resp)=>{
      setLoader(false)
      setData(resp)
    }).catch((err)=>{
      console.log(err.message)
    })
  }, [])
  return (
    <Card style={{width:1000, padding:50, textAlign: "start"}}>
       <Title level={2}>Admin details</Title>
       <Title level={4}  style={{marginTop:50,color:"gray"}}>ID : <Text type='warning' style={{fontSize:18,marginLeft:10}}> {data.id}</Text></Title>
       <Title level={4} style={{color:"gray"}}>First name: <Text type='warning' style={{fontSize:18,marginLeft:10}}> {data.first_name}</Text></Title>
       <Title level={4}style={{color:"gray"}}>Last name: <Text type='warning' style={{fontSize:18,marginLeft:10}}> {data.last_name}</Text></Title>
       <Title level={4}style={{color:"gray"}}>Role: <Text type='warning' style={{fontSize:18,marginLeft:10}}> {data.role}</Text></Title>
       <Link to={"/admin"}>
          <Button type="primary" style={{marginTop:30,width:150,height:40}}>
              Back to Table
          </Button>
        </Link>
        {loader && 
        <div className='loader'>
          <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>}
    </Card>
  )
}

export default Deatils