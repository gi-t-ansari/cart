import React from "react";
import { NavBar } from "./components";
import { Home, Cart } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { APP_URL } from "./config";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route>
              <Route path={APP_URL.HOMEPAGE} element={<Home />} />
              <Route path={APP_URL.CART} element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
