import React,{useState} from 'react'

export default function BasicOfUseState() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("red");
    const [usestateuseobject ,setUsestateuseobject] = useState({name:'vishal',lanme:'jagdhane',Adress:'Auranagabd'})
   const[usesarray,setUseStateArray]=useState(['Vishal','Jagdhane','Auranagabd',8983780269,'MCA','BAMU Univercity'])
   const [arrayofobject,setArrayOfObject]=useState([
    {name:'vishal',lname:'Jagdhane',city:'Auranagabd',Mobile:8983780269,Eduction:'MCA',Unvercity:'BAMU'},
    {name:'Shubhangi',lname:'Jagdhane',city:'Auranagabd',Mobile:8983780269,Eduction:'MCA',Unvercity:'BAMU'},
    {name:'Pooja',lname:'Jagdhane',city:'Auranagabd',Mobile:8983780269,Eduction:'MCA',Unvercity:'BAMU'},
    {name:'pinky',lname:'Jagdhane',city:'Auranagabd',Mobile:8983780269,Eduction:'MCA',Unvercity:'BAMU'},

])
  return (
    <>
    <h1>Real Time UseState Program</h1>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button><br/>

      <h1>My favorite Color is {color}</h1>
      <button type="button" onClick={() => setColor("#0000FF")}>Blue</button>
      <button type="button" onClick={() => setColor("#008000")}>Green</button>
      <button type="button" onClick={() => setColor("#FFFF00")}>Yellow</button>
      <button type="button" onClick={() => setColor("#FF0000")}>Red</button>
      
      <h1>Create a single Hook that holds an object:</h1>
    <p>Object Frist Value Are geting <b>{usestateuseobject.name} {usestateuseobject.lanme}{usestateuseobject.Adress}</b></p><br/>
    <h1>Useste declear array</h1>
{
    usesarray.map(( values)=>(
    <p >{values}</p>

    ))
}

<table border={2}>
<thead>
<tr>
<th>Frist Name</th>
<th>Last  Name</th>
<th>City</th>
<th>Mobile Number</th>
<th>Eduction </th>
<th>Unvercity </th>
</tr>
</thead>
<tbody>
{
    arrayofobject.map((data,index)=>(
        <tr key={index}>
        <td>{data.name}</td>
        <td>{data.lname}</td>
        <td>{data.city}</td>
        <td>{data.Mobile}</td>
        <td>{data.Eduction}</td>
        <td>{data.Unvercity}</td>
        </tr>
    ))
}
</tbody>
</table>

    </>
  )
}
