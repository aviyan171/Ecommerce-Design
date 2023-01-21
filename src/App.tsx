import { Box } from "@mui/material";
import Navbarrr from "./common/Navbarrr";
import Layout from "./Layout/Layout";
import ForgotPassword from "./pages/ForgotPassword";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <Layout>
      <Navbarrr />
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      {/* <ForgotPassword /> */}
      <ResetPassword />
    </Layout>
  );
}

export default App;
