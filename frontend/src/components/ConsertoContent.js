import "./styles/ConsertoContent.css"

export default function ConsertoContent() {
    return(
        <div>
            <div class="alignBusca">
                <div class="Busca">
                    <div class="contentBusca">
                        <h1>
                            Conserto de micro-ondas em 30 minutos
                        </h1>
                        <div class="textBusca">
                            <p>Visite uma de nossas lojas para que nossos técnicos especializados possam realizar uma avaliação</p>
                            <p>minuciosa e detalhada do seu problema. Após a avalição será realizado o conserto do aparelho.</p>
                            <div id="sndTextConser">
                                <p>Ao realizar a avaliação de seu aparelho você fala direto com técnico que o avaliou, para</p>
                                <p>discutir preços e uma solução mais duradoura para seu problema</p>
                            </div>
                            <p id="textConser">Também trabalhamos com forno elétrico e fazemos avaliação sem compromiso de outros aparelhos.</p>
                            <ul>
                                <li>Serviço com garantia;</li>
                                <li>Peças originais;</li>
                                <li>Limpeza técnica.</li>
                                <li>Não cobramos pela avaliação</li>
                            </ul>
                            <strong>Não atendemos em domicílio!</strong>
                        </div>
                        <h2>
                            Atente-se a algumas informações:
                        </h2>
                        <ul>
                            <li>Traga o aparelho até uma de nossas lojas para a avalição;</li>
                            <li>Permanecer no estabelecimento até que o conserto seja concluido;</li>
                            <li>Pagamento em até 3x no cartão.</li>
                        </ul>
                        <div>
                            <p>Para iniciar seu atendimento nos chame pelo:</p>
                            <div id="zapBusca">
                                <img id="imgZapBusca" src="assets/img/zap.png" alt="logo Whatsapp" />
                                Whatsapp
                            </div>
                        </div>
                    </div>
                    <img id="imgBusca" src="assets/img/micro5.jpg" alt="foto de um micro-ondas" />
                </div>
            </div>
        </div>
    );
}