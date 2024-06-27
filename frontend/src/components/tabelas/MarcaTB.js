import "./MarcaTB.css";

export default function ProdutoTB(props) {
    return (
        <main>
            <h1>{props.title}</h1>
            <div class="tb">
                <form class="add-form">
                    <input class="input-desc" type="text" placeholder="Descrição" />
                    <input class="input-logo" type="text" placeholder="Logo" />
                    <input class="input-url" type="text" placeholder="Url" />
                    <button class="btn-marca" type="submit">+</button>
                </form>

                <table>
                    <thead>
                        <tr>
                            <th>Descição</th>
                            <th>Logo</th>
                            <th>Url</th>
                            <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        
                    </tbody>

                </table>
            </div>
        </main>
    );
}