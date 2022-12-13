import logo from "./logo.svg";
import "./App.css";
import "./css/sb-admin-2.css";
import "./css/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Portal from "./Portal";
import ListRestarunts from "./ListRestarunts";
import CreateRestarunts from "./CreateRestarunts";
import ListDishes from "./ListDishes";
import CreateDishes from "./CreateDishes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/portal" element={<Portal />}>
          <Route path="list-restarunts" element={<ListRestarunts />} />
          <Route path="create-restarunts" element={<CreateRestarunts />} />
          <Route path="list-dishes/:rId" element={<ListDishes />} />
          <Route path="create-dishes/:rId" element={<CreateDishes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
