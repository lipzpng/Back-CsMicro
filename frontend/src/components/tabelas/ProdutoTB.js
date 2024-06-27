import "./ProdutoTB.css";

export default function ProdutoTB(props) {
    return (
        <main>
            <h1>{props.title}</h1>
            <div class="tb">
                <form class="add-form">
                    <input class="input-desc" type="text" placeholder="Descrição" />
                    <input class="input-id_cli" type="text" placeholder="ID Cliente" />
                    <input class="input-id_tipo" type="text" placeholder="ID Tipo" />
                    <input class="input-id_marca" type="text" placeholder="ID Marca" />
                    <input class="input-id_modelo" type="text" placeholder="Modelo" />
                    <input class="input-num_serie" type="text" placeholder="Num de série" />
                    <input class="input-capacidade" type="text" placeholder="Capacid. em L" />
                    <input class="input-problema" type="text" placeholder="Problema" />
                    <button class="btn-produto" type="submit">+</button>
                </form>

                <table>
                    <thead>
                        <tr>
                            <th>Descição</th>
                            <th>ID Cliente</th>
                            <th>ID Tipo</th>
                            <th>ID Marca</th>
                            <th>Modelo</th>
                            <th>Num. de série</th>
                            <th>Capacid. L</th>
                            <th>Problema</th>
                            <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* <tr>
                            <td>Descição</td>
                            <td>ID Cliente</td>
                            <td>ID Tipo</td>
                            <td>ID Marca</td>
                            <td>Modelo</td>
                            <td>Número de série</td>
                            <td>Capacidade em L</td>
                            <td>Problema</td>
                            <td>
                                <button class="btn-action"><span class="material-symbols-outlined">edit</span></button>
                                <button class="btn-action"><span class="material-symbols-outlined">delete</span></button>
                            </td>
                        </tr> */}
                    </tbody>

                </table>
            </div>
        </main>
    );
}