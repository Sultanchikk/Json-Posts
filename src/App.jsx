import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import UserDetails from "./pages/UserDetails";
import About from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </>
  );
}

export default App;
