import React from "react";
import { Route, Routes } from "react-router-dom";
import ForgotPasswordScreen from "./Components/Auth/ForgotPasswordScreen";
import LoginScreen from "./Components/Auth/LoginScreen";
import PrivateScreen from "./Components/Auth/PrivateScreen";
import RegisterScreen from "./Components/Auth/RegisterScreen";
import ResetPasswordScreen from "./Components/Auth/ResetPasswordScreen";
import { ProductList } from "./Pages/List/ProductList";
import PrivateRoute from "./routing/PrivateRoute";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <PrivateScreen />
            </PrivateRoute>
          }
        />
        <Route
          path="/list"
          element={
            <PrivateRoute>
              <ProductList />
            </PrivateRoute>
          }
        />
        <Route path="login" element={<LoginScreen />} />
        <Route path="forgotpassword" element={<ForgotPasswordScreen />} />
        <Route path="register" element={<RegisterScreen />} />
        <Route
          path="passwordreset/:resetToken"
          element={<ResetPasswordScreen />}
        />
      </Routes>
    </>
  );
};

export default App;
