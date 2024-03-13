import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="747458958446-o5v18cumud0dn5igsugtbob6vkoogr0b.apps.googleusercontent.com"> 
    <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
