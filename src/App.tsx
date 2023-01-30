import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import Layout from "./Layout/Layout";
import Categories from "./pages/AdminPages/Category/Categories";
import Dashboard from "./pages/AdminPages/Dashboard/Dashboard";
import Order from "./pages/AdminPages/Order";
import OrderDetails from "./pages/AdminPages/OrderDetails";
import AddProduct from "./pages/AdminPages/Product/AddProduct";
import Product from "./pages/AdminPages/Product/Product";

function App() {
  return (
    <Layout>
      <Box>
        {/* <Navbarrr /> */}
        {/* <CategoryBar /> */}
        {/* <RegisterPage /> */}
        {/* <LoginPage /> */}
        {/* <ForgotPassword /> */}
        {/* <ResetPassword /> */}
        {/* <ProductList /> */}
        {/* <ProductDetails /> */}
        {/* <Category /> */}
        {/* <CheckOut /> */}
        {/* <MyAccount /> */}
        {/* <WishList /> */}
        {/* <Cart /> */}
        {/* <AddToCartConfirm /> */}
        {/* <Footer /> */}
        {/* <Drawers /> */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/category" element={<Categories />} />
          <Route path="/product" element={<Product />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order-details" element={<OrderDetails />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </Box>
    </Layout>
  );
}

export default App;
