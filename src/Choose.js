import { ContactsFilled, SmileFilled,EditOutlined } from '@ant-design/icons'
import { Button, Card, Space, Typography } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const{Text}=Typography

const Choose = () => {
  const[size,setSize]=useState("large")
  return (
    <Card>
      <Text type='secondary' style={{fontSize:30,}}>Admin Panel<EditOutlined style={{marginLeft:10}} /></Text><br /><br />
        <Link to={"/admin"}><Button type='dashed' size={size} style={{marginRight:30}} ><ContactsFilled style={{color:"#007ACC"}}/>Managment Admins</Button></Link>
        <Link to={"/client"}><Button type='dashed' size={size}><SmileFilled style={{color:"#007ACC"}} />Managment Clinets</Button></Link>
    </Card>
    
  )
}

export default Choose