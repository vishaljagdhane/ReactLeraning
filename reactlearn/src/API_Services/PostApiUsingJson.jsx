import React, { useState } from 'react'

export default function PostApiUsingJson() {
  const [textfiledData, setTextFiledData] = useState({
    'fname': '',
    'lname': '',
    'email': '',
    'phone': '',
    'address': '',

  })
  const GetingTextRealTimeData = (e) => {
    const { name, value } = e.target;
    setTextFiledData(pervData => ({ ...pervData, [name]: value }))

  }

  const handelSumbit = async  (e)=>{
  try{
    const Respoins = await fetch('http://localhost:3003/user',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
  },
  body:JSON.stringify(textfiledData)
    })
    setTextFiledData({
      'fname': '',
      'lname': '',
      'email': '',
      'phone': '',
      'address': '',
    })
  }catch(e){
    console.error('Error:', e)
  }

  }
  console.log(textfiledData)
  return (
    <>
      <h6>Post API  Useing JSON Sever EndPoint API</h6>

      <div style={{ width: '900px', height: 'auto', background: 'blue', padding: '10px' }}>

        <input
          type='text'
          name='fname'
          value={textfiledData.fname}
          onChange={GetingTextRealTimeData}
          placeholder='User Frist Name'
          autoComplete='off'
          style={{ display: 'block', marginBottom: '10px', padding: '5px', width: '90%' }}

        />
        <input
          type='text'
          name='lname'
          value={textfiledData.lname}
          onChange={GetingTextRealTimeData}
          autoCapitalize='off'
          placeholder='User Last Name'
          style={{ display: 'block', marginBottom: '10px', padding: '5px', width: '90%' }}

        />
        <input
          type='text'
          name='email'
          value={textfiledData.email}
          onChange={GetingTextRealTimeData}
          autoCapitalize='off'
          placeholder='User Email Address'
          style={{ display: 'block', marginBottom: '10px', padding: '5px', width: '90%' }}

        />
        <input
          type='text'
          name='phone'
          value={textfiledData.phone}
          onChange={GetingTextRealTimeData}
          autoCapitalize='off'
          placeholder='User Email Address'
          style={{ display: 'block', marginBottom: '10px', padding: '5px', width: '90%' }}

        />
        <input
          type='text'
          name='address'
          value={textfiledData.address}
          onChange={GetingTextRealTimeData}
          autoCapitalize='off'
          placeholder='User  Address'
          style={{ display: 'block', marginBottom: '10px', padding: '5px', width: '90%' }}

        />
      </div>
      <button type="submit" onClick={handelSumbit} style={{ padding: '10px', marginTop: '20px', width: '50%' }}>Submit</button>
    </>
  )
}
