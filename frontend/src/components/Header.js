import { useEffect } from "react";
import ZapBtn from "./ZapBtn";
import "./styles/Header.css"
import { useNavigate } from "react-router-dom";

export default function Header() { // Componentização do Header para evidar repetição de codigo 
    const navigate = useNavigate();

    useEffect(() =>{
        const trServicos = document.querySelector(".sndNav");

        const fetchTrServicos = async () => {
            const res = await fetch("http://localhost:3333/servico");
            const servicos = await res.json();
            return servicos;
        }

        const createElement = (tag, innerHTML = "") => { // cria tag
            const element = document.createElement(tag);
            
            element.innerHTML = innerHTML;
    
            return element;
        }
    
        const createRow = (servico) => {
            // const { id_servico, titulo, desc_servico, img, ordem_apresentacao, url, ativo } = servico;
            const { titulo, img, url, ativo } = servico;
    
            if (ativo === 0) return null;
    
            const divServico = createElement("div", `<span class="material-symbols-outlined">${img}</span><p>${titulo}</p>`);

            const divTr = createElement("div");

    
            divTr.addEventListener("click", () => navigate(url));
    
            divTr.appendChild(divServico);
            divServico.classList.add("divServicos");
    
            return divTr;
        }

        const loadTrServicos = async () => {
            const servicos = await fetchTrServicos();
    
            trServicos.innerHTML = "";

            servicos.forEach((servico) => {
                const divTr = createRow(servico);
                if (divTr) trServicos.appendChild(divTr); // Verifica se o tr nao é null, se tiver algo faz o tbody
            });
        }
    
        loadTrServicos();
    });

    return (
        <div>
            <div class="alignHeader">
                <header class="mainHeader">
                    <div id="leftContent">
                        <div id="alignLogo" onClick={() => navigate("/")}>
                            <img id="iconHeader" src="assets/img/csicon.png" alt="logo" />
                            <p id="labelLogo">CASA DO MICROONDAS</p>
                        </div>
                        <div class="navigateHeader">
                            <button type="submit" onClick={() => navigate("/")}>Home</button>
                            <button type="submit" onClick={() => navigate("/sobre")}>Endereço</button>
                            <button type="submit" onClick={() => navigate("/contato")}>Contato</button>
                        </div>
                    </div>
                    <div id="rightContent">
                        <div id="btnHeader">
                            <ZapBtn />
                            <div class="contatoHearder" onClick={() => navigate("/contato")}>
                                <p>Orçamento</p>
                            </div>
                        </div>
                        <div class="rightBtnHeader">
                            <button class="loginHeader" type="submit" onClick={() => navigate("/login")}><span class="material-symbols-outlined">person</span><p>Login</p></button>
                        </div>
                    </div>
                </header>
            </div>
            <div class="alignSndHeader">
                <header class="sndHeader">
                    <div class="categoryNav">
                        <span class="material-symbols-outlined">sort</span><p>Serviços</p>
                    </div>
                    <div class="sndNav">
                        {/* <div onClick={() => navigate("/busca-e-entrega")}><span class="material-symbols-outlined">local_shipping</span><p>Busca e Entrega</p></div>
                        <div onClick={() => navigate("/conserto")}><span class="material-symbols-outlined">build</span><p>Conserto</p></div>
                        <div onClick={() => navigate("/reforma")}><span class="material-symbols-outlined">handyman</span><p>Reforma</p></div>
                        <div onClick={() => navigate("/usados")}><span class="material-symbols-outlined">handshake</span><p>Usados</p></div> */}
                    </div>
                </header>
            </div>
        </div>
    );
}