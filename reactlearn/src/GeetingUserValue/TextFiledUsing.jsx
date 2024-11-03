import React, { useState } from 'react'
import ArrayUsingMulitpleTextFiledValue from './ArrayUsingMulitpleTextFiledValue'

export default function TextFiledUsing() {
    const [name,setName] =useState('')
  return (
    <>
      <h1>Text Filed Using Geeting Values</h1>
         <h6>{name}</h6>
      <input type='text' onChange={(e)=>setName(e.target.value)}/>

      <ArrayUsingMulitpleTextFiledValue/>
    </>
  )
}
