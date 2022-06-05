import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import Workshop from "./pages/Workshop/Workshop";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/workshop" element={<Workshop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
