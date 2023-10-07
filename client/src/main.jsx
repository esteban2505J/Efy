import * as React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// 1. import `NextUIProvider` component

import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <main>
        <App />
      </main>
    </NextUIProvider>
  </React.StrictMode>
);
