import React, { useEffect, useState } from "react";

function DataTable() {
  const [data, setData] = useState([]);       
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);  

  useEffect(() => {
   
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

      
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message); 
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  
  if (loading) {
    return <p>Loading data...</p>;
  }

 
  if (error) {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }

 
  return (
    <table border="1" cellPadding="8" style={{ borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
