import BanBusca from "./banners/BanBusca";
import "./styles/BuscaContent.css"

export default function BuscaContent() {
    return(
        <div>
            <BanBusca />

            <div class="alignBusca">
                <div class="Busca">
                    <div class="contentBusca">
                        <h1>
                            Serviço de busca e entrega em Curitiba
                        </h1>
                        <div class="textBusca">
                            <p>Buscamos o seu micro-ondas em sua casa para conserto. <strong>Ao optar pelo serviço de busca e entrega</strong></p>
                            <p><strong>NÃO REALIZAMOS o conserto em 30 minutos por questões de logistica.</strong> Mas mantemos nossos padrões:</p>
                            <ul>
                                <li>Serviço com garantia;</li>
                                <li>Peças originais;</li>
                                <li>Limpeza técnica.</li>
                                <li>Não cobramos pela avaliação</li>
                            </ul>
                        </div>
                        <h2>
                            Requisitos para o serviço de busca e entrega:
                        </h2>
                        <ul>
                            <li>Estar localizado em Curitiba;</li>
                            <li>Não atendemos as regiões metropolitanas;</li>
                            <li>Ter disponibilidade em horário comercial para a busca e entrega do aparelho;</li>
                            <li>Estar disposto a ficar sem o micro-ondas por no mínimo 2 dias.</li>
                        </ul>
                        <div>
                            <p>Para utilizar o serviço de busca e entrega basta nos contatar pelo Whatsapp e prosseguir</p>
                            <p>com o atendimento.</p>
                            <div id="zapBusca">
                                <img id="imgZapBusca" src="assets/img/zap.png" alt="logo Whatsapp" />
                                Whatsapp
                            </div>
                        </div>
                    </div>
                    <img id="imgBusca" src="assets/img/entrega1.png" alt="foto de um micro-ondas" />
                </div>
            </div>
        </div>
    );
}