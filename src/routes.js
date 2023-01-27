import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./page/homePage";
import { Login } from "./page/loginPage";
import { CreateAcount } from "./page/createAcountPage";
import { RefreshPassword } from "./page/refreshPassword";
import { Links } from "./page/Links";
import { Error } from "./page/Error";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/CreateAcount" element={<CreateAcount />}></Route>
        <Route path="/RefreshPassword" element={<RefreshPassword />}></Route>
        <Route path="/links" element={<Links />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
