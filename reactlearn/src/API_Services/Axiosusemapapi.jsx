import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios

export default function Axiosusemapapi() {
    const [fetchapi, setFetchApi] = useState([]);

    useEffect(() => {
        console.log("He Is very Basicly Fetching API with Axios");

        // Using axios.get to fetch data
        axios.get("http://localhost:3002/users")
            .then((response) => {
                // Handle the response from the server
                console.log(response.data);
                setFetchApi(response.data);
            })
            .catch((error) => {
                // Handle errors if the request fails
                console.error("There was an error fetching the data:", error);
            });
    }, []);

    return (
        <div>
            <h1>Very Basic Fetch API with Axios</h1>
            <table border={2}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Mobile Number</th>
                        <th>Education</th>
                        <th>College</th>
                        <th>Local Address</th>
                        <th>Permanent Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        fetchapi.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.midName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.email}</td>
                                <td>{item.mobile}</td>
                                <td>{item.educations}</td>
                                <td>{item.college}</td>
                                <td>{item.localAddress}</td>
                                <td>{item.permanentAddress}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}
