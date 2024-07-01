import { useEffect } from "react";
import "./styles/PerfilContent.css";
// eslint-disable-next-line
import ServicoCrud from "./crud/ServicoCrud";
// eslint-disable-next-line
import ServicoTB from "./tabelas/ServicoTB";
// eslint-disable-next-line
import ProdutoCrud from "./crud/ProdutoCrud";
// eslint-disable-next-line
import ProdutoTB from "./tabelas/ProdutoTB";
// eslint-disable-next-line
import MarcaCrud from "./crud/MarcaCrud";
// eslint-disable-next-line
import MarcaTB from "./tabelas/MarcaTB";
// eslint-disable-next-line
import ModeloCrud from "./crud/ModeloCrud";
// eslint-disable-next-line
import ModeloTB from "./tabelas/ModeloTB";
// eslint-disable-next-line
import TipoProdutoCrud from "./crud/TipoProdutoCrud";
// eslint-disable-next-line
import TipoProdutoTB from "./tabelas/TipoProdutoTB";

export default function PerfilContent() {
    useEffect(() => {
        ServicoCrud();
        // ProdutoCrud();
        // MarcaCrud();
        // ModeloCrud();
        // TipoProdutoCrud();
    });

    return (
        <div class="alignPerfil">
            <ServicoTB title="Lista de serviços"/>
            {/* <ProdutoTB title="Lista de produtos"/> */}
            {/* <MarcaTB title="Lista de marcas" /> */}
            {/* <ModeloTB title="Lista de modelos" /> */}
            {/* <TipoProdutoTB title="Lista de tipos de produtos" /> */}
        </div>
    );
}