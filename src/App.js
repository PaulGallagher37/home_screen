import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import List from "./components/List";
import Faq from "./components/Faqs";


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/faq"  element={<Faq />} />
      </Routes>
  );
}

export default App;
