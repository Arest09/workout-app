import "./index.css"
import "./assets/styles/index.scss"
import "./assets/styles/reset.scss"
import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App"
import { BrowserRouter } from "react-router-dom"
import { LayoutProvider } from "./context/LayoutContext"
import { userContext } from "./context/FooContext"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {/* <userContext.Provider value={'asd'}> */}
        <LayoutProvider>
          <App />
        </LayoutProvider>
        {/* </userContext.Provider> */}
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
)
