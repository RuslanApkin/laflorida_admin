import React, { useState } from "react";
import axios from "axios";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "http://127.0.0.1:5000/api/auth/forgotpassword",
        { email },
        config
      );

      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setEmail("");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-20">
      <h3 className="text-xl font-bold mb-6">Забытый пароль</h3>
      <p className=" max-w-lg text-center">
        Введите почту, с которой зарегестрирован аккаунт. На нее прийдет
        подтверждение о сбросе пароля.
      </p>
      <form
        onSubmit={forgotPasswordHandler}
        className="flex flex-col justify-center items-center mt-4"
      >
        {error && <span className="text-pink-600">{error}</span>}
        {success && <span className="text-accent">{success}</span>}
        <div className="">
          <label htmlFor="email" className="pr-2">
            Почта:
          </label>
          <input
            type="email"
            required
            id="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input_area"
          />
        </div>
        <button
          type="submit"
          className="p-2 bg-accent rounded-full text-white shadow-md mt-5 hover:bg-gray-500"
        >
          Отправить
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordScreen;
