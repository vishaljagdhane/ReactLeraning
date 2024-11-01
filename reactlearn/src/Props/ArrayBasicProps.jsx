import React from 'react'

export default function ArrayBasicProps({sendArray ,TitleData}) {
  return (
    <>
<h1>{TitleData}</h1>
      <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>City</th>
          <th>Job Profile</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {sendArray.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.fname}</td>
            <td>{item.lname}</td>
            <td>{item.age}</td>
            <td>{item.city}</td>
            <td>{item.jobprofile}</td>
            <td>{item.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}
