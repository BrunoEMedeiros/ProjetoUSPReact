import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Dashboard } from "./Pages/Dashboard/Dashboard";

export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
            </Routes>
    </BrowserRouter>
    )
}