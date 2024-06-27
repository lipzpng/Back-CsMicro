import Header from "./components/Header";
import Footer from "./components/Footer";

import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Header /> {/* Exibe o component chamado na tag */}
      <Outlet /> {/* Outlet pega a children do createBrowserRouter() e exibe no lugar da tag*/}
      <Footer />
    </div>
  );
}