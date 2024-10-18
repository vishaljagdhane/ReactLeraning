import React from 'react'

export default function ArrayAndMap() {
   const array =["vishal","Haribhau","Jagdhane","Pune","Auranagbad"]
   const array1=["Shubhangi","Vishal","jagdhane","Pune","Auranagbad"];
   const array2=[...array,...array1];
  return (
    <>
    <h1>Array Of Method</h1>
    <div style={{position:'relative',display:'flex',gap:'15px'}}>
    <div>
  <ul>
  {
  array.map((iteam,inedex)=>(
    <li>{iteam}</li>
  ))
  }
  </ul>
    </div>
    <div>
<ul>

{
    array1.map((iteam,inedex)=>(
    <li key={inedex}>{iteam}</li>
  ))
}
</ul>
    </div>
    <div>
    <ul>
    
    {
        array2.map((iteam,inedex)=>(
        <li key={inedex}>{iteam}</li>
      ))
    }
    </ul>
        </div>
    </div>
    
    </>
  )
}
