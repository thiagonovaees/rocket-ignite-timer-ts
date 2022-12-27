import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DeafultLayout";
import { History } from "./pages/History";
import { Home } from "./pages/Home";

//Componente que determina todas as rotas da aplicação
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
}
