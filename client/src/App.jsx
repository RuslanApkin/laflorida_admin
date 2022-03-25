import React from "react";
import { Route, Routes } from "react-router-dom";
import ForgotPasswordScreen from "./Components/Auth/ForgotPasswordScreen";
import LoginScreen from "./Components/Auth/LoginScreen";
import PrivateScreen from "./Components/Auth/PrivateScreen";
import RegisterScreen from "./Components/Auth/RegisterScreen";
import ResetPasswordScreen from "./Components/Auth/ResetPasswordScreen";
import CategoryEdit from "./Pages/CategoryEdit/CategoryEdit";
import { ProductList } from "./Pages/ProductList/ProductList";
import PrivateRoute from "./routing/PrivateRoute";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute page="/">
              <PrivateScreen />
            </PrivateRoute>
          }
        />
        <Route
          path="/categories"
          element={
            <PrivateRoute page="Категории">
              <CategoryEdit />
            </PrivateRoute>
          }
        />
        <Route
          path="/list"
          element={
            <PrivateRoute page="Товары">
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
    </div>
  );
};

export default App;
