import "./ServicoTB.css";

export default function ServicoTB(props) {
    return (
        <main>
            <h1>{props.title}</h1>
            <div class="tb">
                <form class="add-form">
                    <input class="input-servico" type="text" placeholder="Serviço" />
                    <input class="input-desc" type="text" placeholder="Descrição" />
                    <input class="input-img" type="text" placeholder="Img" />
                    <input class="input-ordem" type="text" placeholder="Ordem" />
                    <input class="input-url" type="text" placeholder="Url" />
                    <button class="btn-servico" type="submit">+</button>
                </form>

                <table>
                    <thead>
                        <tr>
                            <th>Servico</th>
                            <th>Descição</th>
                            <th>Caminho da img</th>
                            <th>Ordem</th>
                            <th>Url</th>
                            <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* Tabela gerada pelo ServicoCrud */}
                    </tbody>

                </table>
            </div>
        </main>
    );
}