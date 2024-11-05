import React ,{useEffect, useState}from 'react'

export default function BasicFetchApi() {
    const [fetchapi,setFetchApi]=useState([])

    useEffect(()=>{
console.log("He Is very Basicly Fetching API ")
fetch("http://localhost:3002/users").then((response)=>{
    response.json().then((Resulat)=>{
        console.log(Resulat)
        setFetchApi(Resulat)
    })
})
    },[setFetchApi])
  return (
    <div>
      <h1>Very Basic Fetch API</h1>
      <table border={2}>
      <thead>
      <tr>
      <th>ID</th>
      <th>Frist Name</th>
      <th>Mid Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Mobile Number</th>
      <th>Eductions</th>
      <th>College</th>
      <th>Local Adress</th>
      <th>Partment Adress</th>
      </tr>
      </thead>
      <tbody>
 {
    fetchapi.map((iteam,index)=>(
        <tr>
        <td>{iteam.id}</td>
        <td>{iteam.name}</td>
        <td>{iteam.midName }</td>
        <td>{iteam.lastName }</td>
        <td>{iteam.email }</td>
        <td>{iteam.mobile }</td>
        <td>{iteam.educations }</td>
        <td>{iteam.college }</td>
        <td>{iteam.localAddress }</td>
        <td>{iteam.permanentAddress }</td>
        
        </tr>
    ))
 }
      
      </tbody>
      </table>
    </div>
  )
}
