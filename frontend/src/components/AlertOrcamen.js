import './styles/AlertOrcamen.css';

export default function AlertOrcamen({onClose }) {
    return (
        <div class="alertaOverlay">
            <div class="alertaOrcamento">
                <h1>Orçamento</h1>
                <p>Devido ao nosso metodo de avaliação não realizamos orçamento antes de uma avaliação, pois após ela o preço do orçamento pode acabar mudando drasticamente devido ao problema que causou o mal funcionamento de seu micro-ondas.</p>
                <p>Obrigado pela compreenção!</p>
                
                <button onClick={onClose}>FECHAR<span class="material-symbols-outlined">close</span></button>
            </div>
        </div>
    );
};