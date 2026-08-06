import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddEntry from "./pages/AddEntry";
import EditEntry from "./pages/EditEntry";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddEntry />} />
        <Route path="/edit/:id" element={<EditEntry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;