import { Box } from "@mui/material";
import Navbarrr from "./common/Navbarrr";
import Layout from "./Layout/Layout";
import ForgotPassword from "./pages/ForgotPassword";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ResetPassword from "./pages/ResetPassword";
import ProductList from "./pages/ProductList";
import CategoryBar from "./common/CategoryBar";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./pages/Footer";
import Category from "./pages/Category";
import CheckOut from "./pages/CheckOut";

function App() {
  return (
    <Layout>
      <Box>
        <Navbarrr />
        {/* <CategoryBar /> */}
        {/* <RegisterPage /> */}
        {/* <LoginPage /> */}
        {/* <ForgotPassword /> */}
        {/* <ResetPassword /> */}
        {/* <ProductList /> */}
        {/* <ProductDetails /> */}
        {/* <Category /> */}
        {/* <Footer /> */}
        <CheckOut />
      </Box>
    </Layout>
  );
}

export default App;
