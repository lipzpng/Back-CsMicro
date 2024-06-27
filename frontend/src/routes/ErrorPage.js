import Footer from "../components/Footer";
import Header from "../components/Header";

export default function ErrorPage() { // Pagina de Error 404
    return (
    <div>
        <Header />
        <div style={{display: "flex", justifyContent: "center", marginTop: 300, marginBottom: 300}}>
            <main>
                <p style={{fontSize: 40}}>Erro 404!</p>
            </main>
        </div>
        <Footer />
    </div>
    );
}