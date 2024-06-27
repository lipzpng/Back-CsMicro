import "./styles/Banners.css"
import "./styles/BanRef.css"
import { useNavigate } from "react-router-dom";

export default function BanRef() { // Componentização do Banner de reforma
    const navigate = useNavigate();
    
    return (
        <div>
            <div class="alignBanner">
                <div class="banner" id="bannRefColor" onClick={() => navigate('/conserto')}>
                    <div class="btnBanner" id="btnBannerRef">
                        <p>CLIQUE AQUI</p><span class="material-symbols-outlined">north_east</span>
                    </div>
                </div>
            </div>    
        </div>
    );
}