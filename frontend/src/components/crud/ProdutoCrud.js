export default function ProdutoCrud() {
    const tbody = document.querySelector("tbody");
    const addForm = document.querySelector(".add-form");

    const inputDesc = document.querySelector(".input-desc");
    const inputIDCli = document.querySelector(".input-id_cli");
    const inputIDTipo = document.querySelector(".input-id_tipo");
    const inputIDMarca = document.querySelector(".input-id_marca");
    const inputIDModelo = document.querySelector(".input-id_modelo");
    const inputIDNumSerie = document.querySelector(".input-num_serie");
    const inputCapacidade = document.querySelector(".input-capacidade");
    const inputProblema = document.querySelector(".input-problema");

    if (!tbody) {
        console.error("Elemento <tbody> não encontrado!");
        return;
    }

    const fetchProdutos = async () => {
        const res = await fetch("http://localhost:3333/produto");
        const produtos = await res.json();
        return produtos;
    }

    const addProduto = async (event) => {
        event.preventDefault();

        const produto = {
            desc: inputDesc.value,
            id_cli: inputIDCli.value,
            id_tipo: inputIDTipo.value,
            id_marca: inputIDMarca.value,
            id_modelo: inputIDModelo.value,
            num_serie: inputIDNumSerie.value,
            capacidade: inputCapacidade.value,
            problema: inputProblema.value
        };

        await fetch("http://localhost:3333/produto", {
            method: "post",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(produto)
        })

        loadProdutos();
        addForm.value = "";
    }

    const delProduto = async (id_produto) => {
        await fetch(`http://localhost:3333/produto/${id_produto}`, {
            method: "delete"
        });
        console.log(id_produto);

        loadProdutos();
    }

    const upProduto = async (id_produto, desc, id_cli, id_tipo, id_marca, id_modelo, num_serie, capacidade, problema) => {

        await fetch(`http://localhost:3333/produto/${id_produto}`, {
            method: "put",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ desc, id_cli, id_tipo, id_marca, id_modelo, num_serie, capacidade, problema })
        });

        loadProdutos();
    }

    const createElement = (tag, innerText = "", innerHTML = "") => { // cria tag
        const element = document.createElement(tag);

        if (innerText) {
            element.innerText = innerText;
        }

        if (innerHTML) {
            element.innerHTML = innerHTML;
        }

        return element;
    }

    const createRow = (produto) => {
        const { id_produto, desc_produto, id_cliente, id_tipo, id_marca, id_modelo, nr_serie, capacidade, problema } = produto;

        const tr = createElement("tr");

        const tdDesc = createElement("td", desc_produto);
        const tdIDCli = createElement("td", id_cliente);
        const tdIDTipo = createElement("td", id_tipo);
        const tdIDMarca = createElement("td", id_marca);
        const tdIDModelo = createElement("td", id_modelo);
        const tdNumSerie = createElement("td", nr_serie);
        const tdCapacidade = createElement("td", capacidade);
        const tdProblema = createElement("td", problema);

        const tdActions = createElement("td");

        const editBtn = createElement("button", "", '<span class="material-symbols-outlined">edit</span>');
        const delBtn = createElement("button", "", '<span class="material-symbols-outlined">delete</span>');

        // UPDATE ->

        const editForm = createElement("form");
        const editInput = createElement("input");

        editInput.value = desc_produto;
        editForm.appendChild(editInput);

        editForm.addEventListener("submit", (event) => {
            event.preventDefault();

            upProduto(id_produto, editInput.value, id_cliente, id_tipo, id_marca, id_modelo, nr_serie, capacidade, problema);
        })

        editBtn.addEventListener("click", () => {
            tdDesc.innerText = "";
            tdDesc.appendChild(editForm);
        })

        // <- UPDATE

        editBtn.classList.add("btn-action");
        delBtn.classList.add("btn-action");

        delBtn.addEventListener("click", () => delProduto(id_produto));

        tdActions.appendChild(editBtn);
        tdActions.appendChild(delBtn);

        tr.appendChild(tdDesc);
        tr.appendChild(tdIDCli);
        tr.appendChild(tdIDTipo);
        tr.appendChild(tdIDMarca);
        tr.appendChild(tdIDModelo);
        tr.appendChild(tdNumSerie);
        tr.appendChild(tdCapacidade);
        tr.appendChild(tdProblema);

        tr.appendChild(tdActions);

        return tr;
    }

    const loadProdutos = async () => {
        const produtos = await fetchProdutos();

        tbody.innerHTML = "";

        produtos.forEach((produto) => {
            const tr = createRow(produto);
            tbody.appendChild(tr); // Verifica se o tr nao é null, se tiver algo faz o tbody
        });
    }

    addForm.addEventListener("submit", addProduto);

    loadProdutos();
}