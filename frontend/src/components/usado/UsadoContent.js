import "./UsadoContent.css"
import UsadoSection from "./UsadoSection";
import UsadoItemContainer from "./UsadoItemContainer";

const itemListData = [
    {
        imgSrc: "assets/img/micro2.png",
        alt: "imagem do produto",
        titlePdt: "Micro-ondas Philco Espelhado 37L",
        pricePdt: "R$ 529.95",
        idPdt: 1
    },
    {
        imgSrc: "assets/img/micro2.png",
        alt: "imagem do produto",
        titlePdt: "Micro-ondas Philco Espelhado 37L",
        pricePdt: "R$ 529.95",
        idPdt: 2
    },
    {
        imgSrc: "assets/img/micro2.png",
        alt: "imagem do produto",
        titlePdt: "Micro-ondas Philco Espelhado 37L",
        pricePdt: "R$ 529.95",
        idPdt: 3
    },
    {
        imgSrc: "assets/img/micro2.png",
        alt: "imagem do produto",
        titlePdt: "Micro-ondas Philco Espelhado 37L",
        pricePdt: "R$ 529.95",
        idPdt: 4
    },
    {
        imgSrc: "assets/img/micro2.png",
        alt: "imagem do produto",
        titlePdt: "Micro-ondas Philco Espelhado 37L",
        pricePdt: "R$ 529.95",
        idPdt: 5
    },
    {
        imgSrc: "assets/img/micro2.png",
        alt: "imagem do produto",
        titlePdt: "Micro-ondas Philco Espelhado 37L",
        pricePdt: "R$ 529.95",
        idPdt: 6
    },
    {
        imgSrc: "assets/img/micro2.png",
        alt: "imagem do produto",
        titlePdt: "Micro-ondas Philco Espelhado 37L",
        pricePdt: "R$ 529.95",
        idPdt: 7
    },
    {
        imgSrc: "assets/img/micro2.png",
        alt: "imagem do produto",
        titlePdt: "Micro-ondas Philco Espelhado 37L",
        pricePdt: "R$ 529.95",
        idPdt: 8
    },
    {
        imgSrc: "assets/img/micro2.png",
        alt: "imagem do produto",
        titlePdt: "Micro-ondas Philco Espelhado 37L",
        pricePdt: "R$ 529.95",
        idPdt: 9
    },
]

export default function UsadoContent() {
    return (
        <div>
            <div class="alignUsado">
                <div class="usadoContent">
                    {/* <div class="usadoFiltro">
                        <h1>Filtros</h1>
                    </div> */}
                    <div class="usado">
                        <UsadoSection title="Usados">
                            {// O .map sempre retorna na Section um novo arrey. Cada elemento desse arrey novo contem o ListItem
                                itemListData.map(function (item) {
                                    return (
                                        <UsadoItemContainer
                                            imgSrc={item.imgSrc}
                                            alt={item.alt}
                                            titlePdt={item.titlePdt}
                                            pricePdt={item.pricePdt}
                                            idPdt={item.idPdt}
                                        />
                                    );
                                })
                            }
                        </UsadoSection>
                    </div>
                </div>
            </div>
        </div>
    );
}