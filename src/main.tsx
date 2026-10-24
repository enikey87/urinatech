import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import {
  RootStoreContext,
  createRootStore,
} from "./stores/RootStore";
import "./styles/global.css";

const store = createRootStore();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RootStoreContext.Provider value={store}>
      <App />
    </RootStoreContext.Provider>
  </StrictMode>
);
