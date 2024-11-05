import React, { useState } from 'react'

export default function PostSelfTry() {
    const [getdata, setGetData] = useState({
        'name': '',
        'email': '',
        'phone': '',
        'address': '',
        'city': '',
        'state': '',
    })

    const handelChanges = (e) => {
        const { name, value } = e.target;
        setGetData(pervData => ({ ...pervData, [name]: value }))
        console.log(getdata)

    }
    const  AddingUserData = async (e)=>{
        // e.preventDefault();
   try{
    const response =  await fetch('http://localhost:3003/user',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'

        },body:JSON.stringify(getdata)
        
    })
    const Resulat = await response.json()
    console.log("Sucessfully"+Resulat)

    setGetData({
        'name': '',
        'email': '',
        'phone': '',
        'address': '',
        'city': '',
       'state': '',
    })
   }catch(err){

    console.log(err)
   }
    }
    return (
        <>
            <div style={{ width: '100%', height: 'auto', position: 'relative', backgroundColor: '#ADD8E6' }}>
                <div style={{ width: '900px', height: 'auto', padding: '15px' }}>
                    <h1>Selp Try POST API</h1>
                    <input
                        type='text'
                        name='name'
                        value={getdata.name}
                        onChange={handelChanges}
                        placeholder='Please Enter Your Full Name'
                        autoComplete='off'
                        style={{ width: '900px', height: 'auto', padding: '15px',marginBottom:'20px' }}
                    />
                    <input
                    type='text'
                    name='email'
                    value={getdata.email}
                    onChange={handelChanges}
                    placeholder='Please Enter Your Email'
                    autoComplete='off'
                    style={{ width: '900px', height: 'auto', padding: '15px' ,marginBottom:'20px'}}
                />
                <input
                type='text'
                name='phone'
                value={getdata.phone}
                onChange={handelChanges}
                placeholder='Please Enter Your Phone'
                autoComplete='off'
                style={{ width: '900px', height: 'auto', padding: '15px' ,marginBottom:'20px'}}
            />
            <input
            type='text'
            name='address'
            value={getdata.address}
            onChange={handelChanges}
            placeholder='Please Enter Your address'
            autoComplete='off'
            style={{ width: '900px', height: 'auto', padding: '15px' ,marginBottom:'20px'}}
        />
            <input
            type='text'
            name='city'
            value={getdata.city}
            onChange={handelChanges}
            placeholder='Please Enter Your city'
            autoComplete='off'
            style={{ width: '900px', height: 'auto', padding: '15px' ,marginBottom:'20px'}}
        />
            <input
            type='text'
            name='state'
            value={getdata.state}
            onChange={handelChanges}
            placeholder='Please Enter Your State'
            autoComplete='off'
            style={{ width: '900px', height: 'auto', padding: '15px' ,marginBottom:'20px'}}
        />
               
        <button  onClick={AddingUserData}style={{width: '900px', height: 'auto', padding: '15px' ,marginBottom:'20px'}}> Add Sever</button>
        </div>

            </div>
        </>
    )
}
