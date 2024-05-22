import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddPage from "./pages/AddPage";
import Basket from "./pages/Basket";
import Detail from "./pages/Detail";
import Wishlist from "./pages/Wishlist";
import MainLayout from "./layouts/MainLayout";
import AranozEditPanel from "./pages/AranozEditPanel";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/addPage" element={<AddPage />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/aranozEditPanel/:id" element={<AranozEditPanel/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
