import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Theaters from "./pages/Theaters";
import Applayout from "./layout/Applayout";
import SelectTicket from "./pages/SelectTicket";
import { routes } from "./shared/routes";

function App() {
  return (
    <Routes>
      <Route element={<Applayout />}>
      {routes.map(({ path, element: Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route   path="/select-theater" element={<Theaters />} /> */}
        <Route   path="/select-ticket" element={<SelectTicket />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
