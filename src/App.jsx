import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthenticationForm from "./views/AuthenticationForm";
import Dashboard from "./views/Dashboard";
import "./assets/styles/ResponsiveMedia.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthenticationForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
