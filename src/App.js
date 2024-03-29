import Product from "./components/Product";
import { ProductProvider } from "./context/ProductContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <Product />
      </ProductProvider>
    </div>
  );
}

export default App;
