import React from 'react'
import { useState } from 'react'

function Greeting() {

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:5000/api/greet",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name })
      }
    );

    const data = await response.json();

    setMessage(data.message);
  }

  return (
    <div>
      <h1>Greeting app</h1>
      
      <input type="text" placeholder="Enter Your Name" value={name} onChange={(e)=> setName(e.target.value)}  />
      <button onClick={handleSubmit}>
        submit
      </button>

      <h3> {message} </h3>
    </div>
  );
}

export default Greeting;