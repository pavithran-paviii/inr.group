import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { Hiddennavbar } from "./components/Hiddennavbar";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";

function App() {
  function closeLogin() {
    let loginContainer = document.getElementById("login-container");
    loginContainer.classList.remove("active");
    let overlay = document.getElementById("overlay");
    overlay.classList.remove("active");
  }

  return (
    <div id="wholeContainer">
      <Hiddennavbar />
      <Navbar />
      <Dashboard />
      <Login />
      <div id="overlay" onClick={closeLogin}></div>
    </div>
  );
}

export default App;
