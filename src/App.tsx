import CategoryBar from "./common/CategoryBar";
import Navbar from "./common/Navbar";
import ProductDetails from "./pages/ProductDetails";
// import Layout from "./Layout/Layout";
// import ProductList from "./pages/ProductList";

function App() {
  return (
    <div>
      <Navbar />
      <CategoryBar />
      {/* <ProductList /> */}
      <ProductDetails />
    </div>
  );
}

export default App;
