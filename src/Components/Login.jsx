import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Login() {
  const history = useHistory();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const { email, password } = loginData;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
    console.log(email, password);
  };
  const loginSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/login");
      const data = await response.json();
      console.log(data);
      const user = data.find((user) => {
        return user.email === loginData.email;
      });
      if (user) {
        history.push("/home");
      } else {
        alert("not success");
      }
    } catch (err) {
      console.log(err);
    }
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
        <h1>Login</h1>
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
          Log In
        </button>
      </div>
    </div>
  );
}

export default Login;
