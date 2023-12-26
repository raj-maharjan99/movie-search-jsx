import React, { useEffect, useState } from "react";

function signUp() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const { email, password } = loginData;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
    console.log(email, password);
  };
  const loginSubmit = () => {
    const login = { email, password };
    fetch(`http://localhost:3000/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(login),
    }).then((response) => {
      return response.json();
    });
  };
  useEffect(() => {
    fetch("http://localhost:3000/login")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="w-[500px] border p-5 flex justify-center flex-col  items-center gap-4">
        <h1>Sign Up</h1>
        <input
          onChange={handleInputChange}
          type="email"
          value={email}
          name="email"
          className="border border-black"
        />
        <input
          onChange={handleInputChange}
          value={password}
          type="password"
          name="password"
          className="border border-black"
        />
        <button className="border" onClick={loginSubmit}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default signUp;
