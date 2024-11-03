import React from 'react'

export default function SecondList() {
    const userData =[
        {id:1,name :'vishal',Lastname:'Jagdhane',email:'vishal@gmail.com',Mobile:8983780269,Addrss:'Auranagabd'},
        {id:2,name :'Pooja',Lastname:'Jagdhane',email:'pooja@gmail.com',Mobile:9876543210,Addrss:'Auranagabd'},
        {id:2,name :'Pooja',Lastname:'Jagdhane',email:'pooja@gmail.com',Mobile:9876543210,Addrss:'Auranagabd'},
        {id:2,name :'Pooja',Lastname:'Jagdhane',email:'pooja@gmail.com',Mobile:9876543210,Addrss:'Auranagabd'},
    
    ]
  return (
    <>
      <h1>Table Data Maping </h1>

      <table border={1} >
      <thead style={{padding:'30px'}}>
      <tr>
      <th>Id</th>
      <th>Name</th>
      <th>LastName</th>
      <th>Email</th>
      <th>Mobile</th>
      <th>Adress</th>
      </tr>
      </thead>
<tbody>
{
    userData.map((iteam,index)=>(
        <tr key={index}>
        <td>{iteam.id}</td>
        <td>{iteam.name}</td>
        <td>{iteam.Lastname}</td>
        <td>{iteam.email}</td>
        <td>{iteam.Mobile}</td>
        <td>{iteam.Addrss}</td>
        
        </tr>
    ))
}
</tbody>
      </table>
    </>
  )
}
