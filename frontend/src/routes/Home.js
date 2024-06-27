import BanRef from "../components/banners/BanRef";
import BanMarcas from "../components/banners/BanMarcas";
import Endereco from "../components/Endereco";

export default function Home() {
  return (
    <div>
      <main>
        <BanRef />
        <Endereco />
        <BanMarcas />
      </main>
    </div>
  );
}