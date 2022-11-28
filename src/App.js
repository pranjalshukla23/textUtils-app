import "./App.css";
import { NavBar } from "./components/NavBar";
import { TextForm } from "./components/TextForm";
import { About } from "./components/About";
import { useState } from "react";
import { Alert } from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      console.log("executing 1");
      setMode("dark");
      document.body.style.backgroundColor = "#181b3a";
      showAlert("dark mode enabled", "success");

      document.title = "Dark mode";
    } else if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode enabled", "success");

      document.title = "light mode";
    }
  };
  return (
    <>
      <Router>
        <NavBar
          title="TextUtils"
          aboutText="About us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze below"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
            <Route path="/about" element={<About />} />} />
          </Routes>
          <TextForm />
        </div>
      </Router>
    </>
  );
}

export default App;