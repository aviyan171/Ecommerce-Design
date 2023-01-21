import { Box } from "@mui/material";
import Navbarrr from "./common/Navbarrr";
import Layout from "./Layout/Layout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Layout>
      <Navbarrr />
      {/* <RegisterPage /> */}
      <LoginPage />
    </Layout>
  );
}

export default App;
