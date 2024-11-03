import React,{useState} from 'react'
import FunctionsOneCheck from './FunctionsOneCheck';
import Functions_Two_check from './Functions_Two_check';

export default function Ternary_OpreatorUsing() {
    const [userLogdin, setuserLogdin] =useState(FunctionsOneCheck);
  return (
    <>
      <h1>Ternary Opreator Using Code </h1>

      {userLogdin ? <FunctionsOneCheck/>: <Functions_Two_check/>} 
    </>
  )
}
