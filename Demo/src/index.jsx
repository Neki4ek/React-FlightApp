import React from "react";
import ReactDOMClient from "react-dom/client";
import { DesignVerBlue } from "./screens/DesignVerBlue";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<DesignVerBlue />);
