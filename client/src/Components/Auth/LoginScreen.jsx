import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate(from, { replace: true });
    }
  });

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "http://127.0.0.1:5000/api/auth/login",
        { email, password },
        config
      );

      localStorage.setItem("authToken", data.token);

      navigate(from, { replace: true });
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-20">
      <h1 className="text-xl font-bold mb-6">
        Панель администрирования La Florida
      </h1>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={loginHandler}
      >
        {error && <span className="text-pink-600">{error}</span>}
        <label htmlFor="email">Логин</label>
        <input
          type="email"
          id="email"
          value={email}
          className="input_area"
          onChange={(e) => setEmail(e.target.value)}
          required
          tabIndex={1}
        />
        <label htmlFor="password">Пароль</label>
        <input
          type="password"
          id="password"
          required
          autoComplete="true"
          value={password}
          className="input_area"
          onChange={(e) => setPassword(e.target.value)}
          tabIndex={2}
        />
        <button
          type="submit"
          className="p-2 bg-accent rounded-full text-white shadow-md mt-5 hover:bg-gray-500 w-full"
        >
          Войти
        </button>
        <Link to="/forgotpassword" className=" text-accent underline">
          Забыли пароль?
        </Link>
      </form>
    </div>
  );
};

export default LoginScreen;
