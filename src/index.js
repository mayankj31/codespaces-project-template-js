/**
 * Entry point of application, where App is rendered within the div with the id of "app" 
 */

import React from "react";
import { createRoot } from "react-dom/client"; // Updated import for React 18
import App from "./App";
import "./styles.css";

const root = createRoot(document.getElementById("app")); // Create root element
root.render(<App />); // Render App component
