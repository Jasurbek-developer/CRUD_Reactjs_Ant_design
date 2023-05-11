import { Button, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Clinet = () => {
  const [data, setData] = useState(null)
  const [loader, setLoader] = useState(true)
  const navigate=useNavigate()
  const editFunction=(id)=>{
    navigate(`/client/edit/${id}`)
  }
  const detailsFunction=(id)=>{
    navigate(`/client/details/${id}`)
  }
  const deleteFunction=(id)=>{
    if (window.confirm("Do you want to remove?")) {
      fetch(`https://6420342c82bea25f6dfc0e94.mockapi.io/rc/clients/${id}`,{
          method:"DELETE",
      })
      .then((res)=> res.json())
      .then((result)=>{
          window.location.reload()
      }).catch((err)=>{
          console.log(err.message);
      })
    }
  }
  useEffect(() => {
    fetch("https://6420342c82bea25f6dfc0e94.mockapi.io/rc/clients")
    .then((res)=>{
      return res.json()
    }).then((response)=>{
      setLoader(false)
      setData(response)
    }).catch((err)=>{
      console.log(err.message)
    })
  }, [])
  
return (
  <div className='container'>
    <Space direction={"vertical"} style={{width:"30%", marginTop:40, marginBottom:50}}>
      <Link to={"/client/create"}><Button type='primary' shape={"round"} block size={"large"}>Add client</Button></Link>
    </Space>
    <Space direction={"vertical"} style={{width:"30%", marginTop:40, marginBottom:50, marginLeft:30}}>
      <Link to={"/"}><Button shape={"round"} block size={"large"}>Back to Choose</Button></Link>
    </Space>
      <table>
         <thead>
         <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Location</th>
            <th>Course</th>
            <th>Management</th>
          </tr>
         </thead>
          {data &&
            data.map(item=>(
              <tbody  key={item.id}>
                <tr>
                <td>{item.id}.</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.age}</td>
                <td>{item.location}</td>
                <td>{item.course}</td>
                <td>
                  <Button
                   type='primary' onClick={()=>{editFunction(item.id)}}
                   style={{borderRadius:5, width:80, marginRight:10}}>Edit</Button>
                  <Button  
                   onClick={()=>{detailsFunction(item.id)}}
                   style={{borderRadius:5, width:80, marginRight:10}}>Details</Button>
                  <Button 
                   type='primary' danger onClick={()=>{deleteFunction(item.id)}}
                   style={{borderRadius:5, width:80, marginRight:10}}>Delete</Button>
                </td>
                </tr>
              </tbody>
            ))
          }
      </table>
      {loader && 
        <div className='loader'>
          <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>}
  </div>
)
}

export default Clinet