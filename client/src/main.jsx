import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-ucedad3kofcnjkur.us.auth0.com"
     clientId="4G1s7s621hPOXFRnM07XKqnM02HBHzlp"
     authorizationParams={{
      // redirect_uri: "https://full-stack-real-estate-youtube-sooty.vercel.app"
      redirect_uri: "http://localhost:5173"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
