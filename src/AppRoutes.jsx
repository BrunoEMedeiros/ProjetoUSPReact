import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { Crud } from "./Components/Crud/Crud";

export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path='/sala' element={<Crud />}/>
            </Routes>
        </BrowserRouter>
    )
}