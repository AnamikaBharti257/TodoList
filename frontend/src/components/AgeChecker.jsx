
import { useState } from "react";
import "../App.css";

function AgeChecker() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [result, setResult] = useState(null);
    const[loading , setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch(
                "http://localhost:5000/api/check-age",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ name, age })
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setResult({
                    message: data.message,
                    eligible: null
                });
                return;
            }

            setResult(data);
            setLoading(false);

        } catch (error) {
            setResult({
                message: "Unable to connect to server",
                eligible: null
            });
        }
    };

    return (
        <div className="container" >
            <h1>Age Checker</h1>

            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                />

                <br /><br />

                <label>Age:</label>
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Enter your age"
                />

                <br /><br />

                <button type="submit">
                    Check Eligibility
                </button>
                 {loading === true ? <h4>Loading...........</h4> : ""}
                
            </form>
            <button onClick={()=> {setName("") , setAge("") , setResult(null)}}>Reset</button>
           
            {result && (
                <h3 style={{
                    color: result.eligible === true
                        ? "green"
                        : result.eligible === false
                        ? "red"
                        : "red"
                }}>
                    {result.message}
                </h3>
            )}
        </div>
    );
}

export default AgeChecker;
