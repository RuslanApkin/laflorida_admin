import React from "react";
import { Route, Routes } from "react-router-dom";
import ForgotPasswordScreen from "./Components/Auth/ForgotPasswordScreen";
import LoginScreen from "./Components/Auth/LoginScreen";
import PrivateScreen from "./Components/Auth/PrivateScreen";
import RegisterScreen from "./Components/Auth/RegisterScreen";
import ResetPasswordScreen from "./Components/Auth/ResetPasswordScreen";
import AddProduct from "./Pages/AddProduct/AddProduct";
import CardList from "./Pages/CardList/CardList";
import CategoryEdit from "./Pages/CategoryEdit/CategoryEdit";
import Home from "./Pages/Home/Home";
import OrderList from "./Pages/OrderList/OrderList";
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
              <Home />
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
          path="/productlist"
          element={
            <PrivateRoute page="Товары">
              <ProductList />
            </PrivateRoute>
          }
        />
        <Route
          path="/orderlist"
          element={
            <PrivateRoute page="Заказы">
              <OrderList />
            </PrivateRoute>
          }
        />
        <Route
          path="/add"
          element={
            <PrivateRoute page="Добавить">
              <AddProduct />
            </PrivateRoute>
          }
        />
        <Route
          path="/cardlist"
          element={
            <PrivateRoute page="Карточки">
              <CardList />
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
