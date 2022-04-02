import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const PrivateScreen = () => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

  useEffect(() => {
    const fetchPrivateData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get(
          "http://127.0.0.1:5000/api/private",
          config
        );
        setPrivateData(data.data);
      } catch (err) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };

    fetchPrivateData();
  }, []);
  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <div>{privateData}</div>
  );
};

export default PrivateScreen;
