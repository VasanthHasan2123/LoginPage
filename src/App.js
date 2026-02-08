import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// ✅ Import COMPONENTS (not just files)
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/Forgotpassword";
import Otp from "./pages/Otp";
import CreatePassword from "./pages/Createpassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/create-password" element={<CreatePassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
