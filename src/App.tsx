import { Box } from "@mui/material";
import Navbarrr from "./common/Navbarrr";
import Layout from "./Layout/Layout";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Layout>
      <Navbarrr />
      <RegisterPage />
    </Layout>
  );
}

export default App;
