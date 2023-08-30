import { useEffect, useRef } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("");
  return (
    <>
      <div>
        <select className="form-select" onChange={(event) => setCategory(event?.target.value)}>
          <option value="Clothing">Clothing</option>
          <option value="Household">Household</option>
          <option value=""></option>
        </select>
        <ProductList category={category}/>
      </div>
    </>
  );
}

export default App;
