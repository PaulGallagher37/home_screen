import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import List from "./components/List";


function App() {
  return (
    <BrowserRouter>
      <Routes path="/">
        <Route path="home" element={<Home />} />
        <Route path="list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
