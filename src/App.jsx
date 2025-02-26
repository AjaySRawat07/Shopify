import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Users from "./components/Users";
import Contact from "./components/Contact";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Product from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Login from "./components/Login";
import ProtectedRoutes from "./components/ProtectedRouters";
import SignUp from "./components/Sign-up";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Public Routess */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/*  Protect These Routes */}
          <Route
            path="/"
            element={
              <ProtectedRoutes>
                <HomePage />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/products"
            element={
              <ProtectedRoutes>
                <Product />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/products/:id"
            element={
              <ProtectedRoutes>
                <ProductDetails />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/users"
            element={
              <ProtectedRoutes>
                <Users />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoutes>
                <Contact />
              </ProtectedRoutes>
            }
          />

          {/* Redirect all unknown routes to /login in */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
