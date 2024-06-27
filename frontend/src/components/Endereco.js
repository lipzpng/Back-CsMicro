import ZapBtn from "./ZapBtn";
import "./styles/Endereco.css";
import { useNavigate } from "react-router-dom";

export default function Endereco() {
    const navigate = useNavigate()

    return (
        <div>
            <div class="alignEndereco">
                <div class="enderecoContent">
                    <h1>Nossos endereços</h1>
                    <div class="opsContent">
                        <div class="opContainer">
                            <div class="textEndereco">
                                <h3 id="opEndereco">Unidade Rebouças</h3>
                                <p id="endereco">Avenida Presidente Kennedy, 410 - Rebouças</p>

                                <ZapBtn>(41) 98516-3600</ZapBtn> {/* Esse num é levado ate o ZapBtn.js onde o props.children pega e coloca no botao */}

                                <div class="btnEndereco" onClick={() => navigate('/sobre')}>
                                    <p>MAIS INFORMAÇÕES</p><span class="material-symbols-outlined">north_east</span>
                                </div>
                            </div>
                            <div>
                                <iframe class="mapaEndereco" title="opcao1Endereco" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.550411989916!2d-49.2653922!3d-25.4532902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce48c9e3e3e4b%3A0x94da37baf10ee50e!2sAv.%20Pres.%20Kennedy%2C%20410%20-%20Rebou%C3%A7as%2C%20Curitiba%20-%20PR%2C%2080220-200!5e0!3m2!1spt-BR!2sbr!4v1715903259561!5m2!1spt-BR!2sbr" ></iframe>
                            </div>
                        </div>
                        <div class="opContainer">
                            <div class="textEndereco">
                                <h3 id="opEndereco">Unidade Santa Felicidade</h3>
                                <p id="endereco">Rua Saturnino Miranda, 84 - Santa Felicidade</p>

                                <ZapBtn>(41) 98516-3602</ZapBtn>
                                
                                <div class="btnEndereco" onClick={() => navigate('/sobre')}>
                                    <p>MAIS INFORMAÇÕES</p><span class="material-symbols-outlined">north_east</span>
                                </div>
                            </div>
                            <div>
                                <iframe class="mapaEndereco" title="opcao2Endereco" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.1415861436512!2d-49.3341531!3d-25.400070799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce1ae328a748b%3A0x7cfdac29470a291d!2sR.%20Saturnino%20Miranda%2C%2084%20-%20Santa%20Felicidade%2C%20Curitiba%20-%20PR%2C%2082030-320!5e0!3m2!1spt-BR!2sbr!4v1715903308393!5m2!1spt-BR!2sbr" ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}