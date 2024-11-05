import React, { useState } from 'react';

export default function BasisPost() {
  // Initialize state with empty values for each field
  const [userdata, setUserData] = useState({
    name: '',
    midName: '',
    lastName: '',
    email: '',
    educations: '',
    college: '',
    mobile: '',
    localAddress: '',
    permanentAddress: ''
  });

  // Handle change for any input field
  const handleChange = (e) => {
    const { name, value } = e.target; // Get input name and value
    setUserData(prevData => ({
      ...prevData, // Retain other fields
      [name]: value // Update the specific field
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the page from reloading on submit

    try {
      const response = await fetch('http://localhost:3002/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userdata), // Send the form data as JSON
      });

      const result = await response.json(); // Assuming the API returns a JSON response
      console.log('Success:', result); // You can log or handle the success response here

      // Optionally, clear the form after submission
      setUserData({
        name: '',
        midName: '',
        lastName: '',
        email: '',
        educations: '',
        college: '',
        mobile: '',
        localAddress: '',
        permanentAddress: ''
      });
    } catch (error) {
      console.error('Error:', error); // Handle any errors here
    }
  };

  return (
    <>
      <h1>Getting User Value</h1>

      <div style={{ position: 'relative', display: 'block', padding: '15px', width: '1000px', height: 'auto', margin: '0px auto' }}>
        <form onSubmit={handleSubmit}>
          {/* Input for Name */}
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={userdata.name}
            onChange={handleChange}
            placeholder="Enter Name"
            style={{ display: 'block', marginBottom: '10px', padding: '5px', width: '100%' }} // Full width
          />

          {/* Input for Middle Name */}
          <label>Middle Name:</label>
          <input
            type="text"
            name="midName"
            value={userdata.midName}
            onChange={handleChange}
            placeholder="Enter Middle Name"
            style={{ display: 'block', marginBottom: '10px', padding: '5px', width: '100%' }} // Full width
          />

          {/* Input for Last Name */}
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={userdata.lastName}
            onChange={handleChange}
            placeholder="Enter Last Name"
            style={{ display: 'block', marginBottom: '10px', padding: '5px', width: '100%' }} // Full width
          />

          {/* Input for Email */}
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userdata.email}
            onChange={handleChange}
            placeholder="Enter Email"
            style={{ display: 'block', marginBottom: '10px', padding: '5px', width: '100%' }} // Full width
          />

          {/* Input for Education */}
          <label>Education:</label>
          <input
            type="text"
            name="educations"
            value={userdata.educations}
            onChange={handleChange}
            placeholder="Enter Education"
            style={{ display: 'block', marginBottom: '10px', padding: '5px', width: '100%' }} // Full width
          />

          {/* Input for College */}
          <label>College:</label>
          <input
            type="text"
            name="college"
            value={userdata.college}
            onChange={handleChange}
            placeholder="Enter College"
            style={{ display: 'block', marginBottom: '10px', padding: '5px', width: '100%' }} // Full width
          />

          {/* Input for Mobile */}
          <label>Mobile:</label>
          <input
            type="text"
            name="mobile"
            value={userdata.mobile}
            onChange={handleChange}
            placeholder="Enter Mobile"
            style={{ display: 'block', marginBottom: '10px', padding: '5px', width: '100%' }} // Full width
          />

          {/* Input for Local Address */}
          <label>Local Address:</label>
          <input
            type="text"
            name="localAddress"
            value={userdata.localAddress}
            onChange={handleChange}
            placeholder="Enter Local Address"
            style={{ display: 'block', marginBottom: '10px', padding: '5px', width: '100%' }} // Full width
          />

          {/* Input for Permanent Address */}
          <label>Permanent Address:</label>
          <input
            type="text"
            name="permanentAddress"
            value={userdata.permanentAddress}
            onChange={handleChange}
            placeholder="Enter Permanent Address"
            style={{ display: 'block', marginBottom: '10px', padding: '5px', width: '100%' }} // Full width
          />

          {/* Submit Button */}
          <button type="submit" style={{ padding: '10px', marginTop: '20px', width: '100%' }}>Submit</button>
        </form>
      </div>
    </>
  );
}
