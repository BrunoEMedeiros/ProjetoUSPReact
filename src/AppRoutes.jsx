import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Card } from "./Pages/Card";
import { Catalog } from "./Pages/Catalog";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { Home } from "./Pages/Home";

export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/home" element={<Home />} />
            <Route path="/card" element={<Card />} />
            <Route path="/catalog" element={<Catalog />} />
        </Routes>
    </BrowserRouter>
    )
}