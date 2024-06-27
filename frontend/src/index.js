import ReactDOM from 'react-dom/client';
import App from './App';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from './routes/ErrorPage';
import Home from "./routes/Home";
import Contato from "./routes/Contato";
import Sobre from "./routes/Sobre";
import Login from "./routes/Login";
import Usados from "./routes/Usados";
import BuscaEntrega from "./routes/BuscaEntrega"
import Conserto from './routes/Conserto';
import Reforma from './routes/Reforma';
import Cadastro from './routes/Cadastro';
import Perfil from './routes/Perfil';

const routes = createBrowserRouter([ // O DOM faz com que possamos utilizar rotas para o nosso site
  {
    path: "/",
    element: <App />, // Elemento principal do site
    errorElement: <ErrorPage />, // Pagina de erro 404, caso a url nao seja encontrada
    children: [ // O children envia para o component pai <Outlet /> oq deve ser carrregado
      { path: "/",element: <Home />}, // Caminho , e o componente q deve ser carregado pela div pai
      { path: "contato", element: <Contato />},
      { path: "sobre", element: <Sobre />},
      { path: "login", element: <Login />},
      { path: "usados", element: <Usados />},
      { path: "busca-e-entrega", element: <BuscaEntrega />},
      { path: "conserto", element: <Conserto />},
      { path: "reforma", element: <Reforma />},
      { path: "cadastro", element: <Cadastro />},
      { path: "perfil", element: <Perfil />},
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routes} /> // Faz a renderização do site qnd o id="root" for chamado
);