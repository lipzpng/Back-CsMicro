import "./UsadoItemContainer.css"
import { useNavigate } from "react-router-dom";

export default function UsadoItemContainer(props) {
    const navigate = useNavigate();
    
    return (
        <div>
            <div class="container" onClick={() => navigate("/produto/"+props.idPdt)}>
                <div>
                    <div class="imgContainer">
                        <img src={props.imgSrc} alt={props.alt} />
                    </div>
                    <div class="pdtTitle">{props.titlePdt}</div>
                    <div class="price">{props.pricePdt}</div>
                </div>
                <button class="buttonContainer"><p>COMPRAR</p><span class="material-symbols-outlined">shopping_cart</span></button>
            </div>
        </div>
    );
}