import React, { useState } from 'react'

export default function ArrayUsingMulitpleTextFiledValue() {
    const [textFieldData, setTextFieldData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        cityName: '',
        mobileNumber: '',
      });

      const heandelChanges =(e)=>{
        const {name ,value }=e.target;
    setTextFieldData((pervData)=>({
        ...pervData,
        [name]:value

    }))
      }
    //   console.log(textFieldData)
const AddingValue=(e)=>{
    e.preventDefault();
    console.log('Collected Values:', textFieldData);
    setTextFieldData({
        firstName: '',
        middleName: '',
        lastName: '',
        cityName: '',
        mobileNumber: '',
      });
}
  return (
    <>
      <h1>Multiple Text Filed using store single value</h1>
     <input type='text' placeholder='Frist Name' onChange={heandelChanges} value={textFieldData.firstName} name="firstName"/><br/>
     <input type='text' placeholder='Middle Name' onChange={heandelChanges} value={textFieldData.middleName}  name='middleName'/><br/>
     <input type='text' placeholder='Last Name' onChange={heandelChanges} value={textFieldData.lastName} name='lastName'/><br/>
     <input type='text' placeholder='City Name' onChange={heandelChanges} value={textFieldData.cityName} name='cityName'/><br/>
     <input type='text' placeholder='Mobile Number' onChange={heandelChanges} value={textFieldData.mobileNumber} name='mobileNumber'/><br/>

     <button onClick={AddingValue}>Add This Value</button>

    </>
  )
}
