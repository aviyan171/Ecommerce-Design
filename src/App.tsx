import { Box } from "@mui/material";
import Navbarrr from "./common/Navbarrr";
import Layout from "./Layout/Layout";
import ForgotPassword from "./pages/ForgotPassword";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ResetPassword from "./pages/ResetPassword";
import ProductList from "./pages/ProductList";
import CategoryBar from "./common/CategoryBar";

function App() {
  return (
    <Layout>
      <Box>
        <Navbarrr />
        <CategoryBar />
        {/* <RegisterPage /> */}
        {/* <LoginPage /> */}
        {/* <ForgotPassword /> */}
        {/* <ResetPassword /> */}
        <ProductList />
      </Box>
    </Layout>
  );
}

export default App;
