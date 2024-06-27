import "./ModeloTB.css";

export default function ModeloTB(props) {
    return (
        <main>
            <h1>{props.title}</h1>
            <div class="tb">
                <form class="add-form">
                    <input class="input-desc" type="text" placeholder="Descrição" />
                    <button class="btn-modelo" type="submit">+</button>
                </form>

                <table>
                    <thead>
                        <tr>
                            <th>Descição</th>
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