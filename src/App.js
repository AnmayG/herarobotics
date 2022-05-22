import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LogIn from "./pages/authentication/LoginPage";
import SignUp from "./pages/authentication/SignUpPage";
import NewProject from "./pages/projects/NewProject";
import Dashboard from "./pages/projects/Dashboard";
import NewProjectInterstitialPage from "./pages/projects/NewProjectInterstitialPage";
import Editor from "./pages/editors/Editor";
import RequireAuth from "./pages/authentication/RequireAuth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/projectloading" element={<NewProject />} />
        <Route
          exact
          path="/newproject"
          element={<NewProjectInterstitialPage />}
        />
        <Route
          exact
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route exact path="/editor" element={<Editor />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
