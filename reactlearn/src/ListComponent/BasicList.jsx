import React from 'react'
import SecondList from './SecondList';

export default function BasicList() {
  const data = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Doe', age: 28 },
    { id: 3, name: 'Michael Doe', age: 35 },
  ];
  return (
    <>
      <h1>List Tag Using List</h1>
      <ul>
{
  data.map((item)=>(
    <li>{item.id} {item.name}{item.age}</li>
  ))
}
<SecondList/>
      </ul>
    </>
  )
}
