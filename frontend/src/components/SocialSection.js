import "./styles/SocialSection.css"

export default function SocialSection() { // Componentização dos links de rede social para usar em varios lugares 
    return (
        <div>
            <section id="iconRedeSobre">
                <i class="fa-brands fa-facebook fa-2xl" onClick={() => window.open("https://www.facebook.com", '_blank')}></i>
                <i class="fa-brands fa-x-twitter fa-2xl" onClick={() => window.open("https://www.x.com", '_blank')}></i>
                <i class="fa-brands fa-instagram fa-2xl" onClick={() => window.open("https://www.instagram.com", '_blank')}></i>
                <i class="fa-brands fa-linkedin fa-2xl" onClick={() => window.open("https://www.linkedin.com", '_blank')}></i>
            </section>
        </div>
    );
}