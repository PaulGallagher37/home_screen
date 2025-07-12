import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import List from "./components/List";
import FAQ from "./components/faqs";


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/faq"  element={<FAQ />} />
      </Routes>
  );
}

export default App;
