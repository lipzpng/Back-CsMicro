import "./styles/Footer.css"
//import SocialSection from "./SocialSection";
import { useNavigate } from "react-router-dom";

export default function Footer() { // Componentização do Footer para evidar repetição de codigo desnecessaria
    const navigate = useNavigate();
    
    return (
        <div>
            <footer class="footer">
                <div id="alignInfo">
                    <div class="infos">
                        <div class="contentInfo">
                            <span class="material-symbols-outlined">package_2</span>
                            <div class="textContentInfo">
                                Serviço de Busca e Entrega
                                <p>Mediante a prazo a ser estabelecido</p>
                            </div>
                        </div>
                        <div class="contentInfo">
                            <span class="material-symbols-outlined">workspace_premium</span>
                            <div class="textContentInfo">
                                Satisfação do Cliente
                                <p>Pós-Venda verifica cliente após serviço</p>
                            </div>
                        </div>
                        <div class="contentInfo">
                            <span class="material-symbols-outlined">headset_mic</span>
                            <div class="textContentInfo">
                                Disponíveis para Contato
                                <p>Contate-nos por WhatsApp, Email, Telefone</p>
                            </div>
                        </div>
                        <div class="contentInfo">
                            <span class="material-symbols-outlined">credit_score</span>
                            <div class="textContentInfo">
                                Pagamentos Customizados
                                <p>Visa, Mastercard, Pix, dentre outros</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div id="alignCateg">
                    <div class="categoriesFooter">
                        <div class="columnFooter">
                            <p>Categories</p>
                            <div>Mais Comprados</div>
                            <div>Ofertas Relampago</div>
                            <div>Conserto</div>
                            <div>Reforma</div>
                            <div>Acessórios</div>
                            <div>Usados</div>
                            <div>Serviço de Busca e Entrega</div>
                        </div>
                        <div class="columnFooter">
                            <p>Marcas Populares</p>
                            <div>Samsung</div>
                            <div>Philco</div>
                            <div>Philips</div>
                            <div>Britânia</div>
                            <div>Eletrolux</div>
                            <div>Panasonic</div>
                            <div>Brastemp</div>
                        </div>
                        <div class="columnFooter">
                            <p>Links Úteis</p>
                            <div onClick={() => navigate("/sobre")}>Sobre</div>
                            <div onClick={() => navigate("/contato")}>Contato</div>
                            <div>Central de Atendimento</div>
                            <div>Carreira</div>
                            <div>Políticas</div>
                        </div>
                        <div class="columnFooter">
                            <p>Atendimento</p>
                            <div>Pagamentos</div>
                            <div>Rastrear entrga</div>
                            <div>Devoluções de produtos</div>
                            <div>Carrinho</div>
                        </div>
                        <div class="newsletterFooter">
                            <p>Novidades</p>
                            <div>Inscreva-se para receber notificações sobre</div>
                            <div>lançamentos de produtos, ofertas especiais e</div>
                            <div>notícias.</div>
                            <form class="formFooter">
                                <input class="inputFooter" type="text" placeholder="Email..." required/>
                                <button class="inputButtonFooter" type="submit">Inscreva-se</button>
                            </form>
                            <div>
                                <p id="subTitleSocial">Redes sociais:</p>
                                <SocialSection />
                            </div>
                        </div>
                    </div>
                </div> */}
                <div id="alignFootnote">
                    <div class="footnote" id="footnote">
                        <div class="copyright">
                            © Casa do Microondas - All Rights Reserved
                        </div>
                        <div id="alignLogo" onClick={() => navigate("/")}>
                            <img id="iconFooter" src="assets/img/csicon.png" alt="logo"/>
                            <p id="labelLogo">CASA DO MICROONDAS</p>
                        </div>
                        <div id="alignLinkedin" onClick={() => window.open("https://linktr.ee/cmouniandrade", '_blank')}>
                            <p id="labelLinkedin">Desenvolvedores do Site:</p>
                            <i class="fa-brands fa-linkedin fa-2xl"></i>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}