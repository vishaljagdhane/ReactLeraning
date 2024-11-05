import React, { useEffect, useState } from 'react';

export default function FetchWithState() {
  const [users, setUsers] = useState([]);  // State to store fetched users
  const [loading, setLoading] = useState(true);  // State to track loading state
  const [error, setError] = useState(null);  // State to track any errors

  useEffect(() => {
    fetch("http://localhost:3002/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);  // Store the fetched data in state
        setLoading(false);  // Set loading to false
      })
      .catch((error) => {
        setError(error);  // Store the error in state
        setLoading(false);  // Set loading to false
      });
  }, []);  // Empty dependency array means the effect runs once on mount

  // Conditional rendering based on loading or error state
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Fetched Users</h1>
      <h1>Intermediate Example:</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}{user.midName }</li>  // Assuming each user has 'id' and 'name'
        ))}
      </ul>
    </div>
  );
}
