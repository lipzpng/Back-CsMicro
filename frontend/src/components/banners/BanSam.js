import "./styles/Banners.css"
import "./styles/BanSam.css"

export default function BanSam() { // Componentização do Banner do microondas da samsung
    return (
        <div>
            <div class="alignBanner">
                <div class="banner" id="bannSamColor">
                    <div class="onleftBanner">
                        <p id="regularFont">SAMSUNG</p>
                        <p id="bigText">Micro-ondas<br/>Inteligente</p>
                        <p id="regularFont">POR</p>
                        <p id="numText">R$1.200</p>
                        <div class="btnBanner">
                            <p>COMPRE AGORA</p><span class="material-symbols-outlined">north_east</span>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
}