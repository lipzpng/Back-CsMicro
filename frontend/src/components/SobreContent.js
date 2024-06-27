import SocialSection from "./SocialSection";
import "./styles/SobreContent.css"

export default function SobreContent() { // Componentização do conteudo da pagina sobre 
    return (
        <div>
            <p id="titleSobre">Nossas informações</p>
            <div class="sobre">
                <div class="contentSobre">
                    <div class="logoSobre">
                        <div>
                            <img src="assets/img/csicon.png" alt="logo" />
                            <p>CASA DO MICROONDAS</p>
                        </div>
                    </div>

                    <p id="subTitleSobre">Endereço:</p>
                    <div class="mapaSobre">
                        <div id="alignMapa">
                            <div class="containerSobre">Opção 1 - Avenida Presidente Kennedy, 410 - Rebouças</div>
                            <iframe class="sobreMap" title="opcao1Sobre" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.550411989916!2d-49.2653922!3d-25.4532902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce48c9e3e3e4b%3A0x94da37baf10ee50e!2sAv.%20Pres.%20Kennedy%2C%20410%20-%20Rebou%C3%A7as%2C%20Curitiba%20-%20PR%2C%2080220-200!5e0!3m2!1spt-BR!2sbr!4v1715903259561!5m2!1spt-BR!2sbr" ></iframe>
                        </div>
                        <div id="alignMapa">
                            <div class="containerSobre">Opção 2 - Rua Saturnino Miranda, 84 - Santa Felicidade</div>
                            <iframe class="sobreMap" title="opcao2Sobre" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.1415861436512!2d-49.3341531!3d-25.400070799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce1ae328a748b%3A0x7cfdac29470a291d!2sR.%20Saturnino%20Miranda%2C%2084%20-%20Santa%20Felicidade%2C%20Curitiba%20-%20PR%2C%2082030-320!5e0!3m2!1spt-BR!2sbr!4v1715903308393!5m2!1spt-BR!2sbr" ></iframe>
                        </div>
                    </div>
                    
                    <div class="alignSobre">
                        <p id="subTitleSobre">Telefone:</p>
                        <div class="linha1">
                            <div class="containerSobre">(41) 3332-8000</div>
                        </div>
                    </div>
                    <div class="alignSobre">
                        <p id="subTitleSobre">Whatsapp:</p>
                        <div class="linha2">
                            <div class="containerSobre">Opção 1 - (41) 98516-3600</div>
                            <div class="containerSobre">Opção 2 - (41) 98516-3602</div>
                        </div>
                    </div>
                    <div class="alignSobre">
                        <p id="subTitleSobre">Redes sociais:</p>
                        <SocialSection />
                    </div>
                </div>
            </div>
        </div>
    );
}