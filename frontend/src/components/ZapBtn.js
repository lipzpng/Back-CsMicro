import "./styles/ZapBtn.css";

export default function ZapBtn(props) {
    const linkZap = "https://chat.whatsapp.com/BDV5HfU2YUkAufcvghnJT1";

    return(
        <div class="btnZap">
            <div class="zap" onClick={() => window.open(linkZap, '_blank')}>
                <img id="iconZap" src="assets/img/zap.png" alt="logo do Whatsapp" />
                <p>Whatsapp</p>
                {props.children}
            </div>
        </div>
    );
}