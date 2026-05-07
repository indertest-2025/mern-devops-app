"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:5000/api/test")
      .then((res) => {
        console.log("RAW RESPONSE:", res);
        return res.json();
      })
      .then((data) => {
        console.log("JSON DATA:", data);

        setMessage(data.message);
      })
      .catch((err) => {
        console.error("FETCH ERROR:", err);

        setMessage("Error");
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>MERN DevOps App</h1>

      <p>Backend Response: {message}</p>
    </div>
  );
}