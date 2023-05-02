import { Outlet } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import "./App.css";

import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <AuthProvider>
        <Outlet />
        </AuthProvider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
