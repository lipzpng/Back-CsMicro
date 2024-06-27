export default function MarcaCrud() {
    const tbody = document.querySelector("tbody");
    const addForm = document.querySelector(".add-form");

    const inputDesc = document.querySelector(".input-desc");

    if (!tbody) {
        console.error("Elemento <tbody> não encontrado!");
        return;
    }

    const fetchTipoProduto = async () => {
        const res = await fetch("http://localhost:3333/tipoProduto");
        const tipos = await res.json();
        return tipos;
    }

    const addTipoProduto = async (event) => {
        event.preventDefault();

        const tipo = {
            desc: inputDesc.value
        };

        await fetch("http://localhost:3333/tipoProduto", {
            method: "post",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(tipo)
        })

        loadTipoProduto();
        addForm.value = "";
        inputDesc.value = "";
    }

    const delTipoProduto = async (id_tipo) => {
        await fetch(`http://localhost:3333/tipoProduto/${id_tipo}`, {
            method: "delete"
        });
        console.log(id_tipo);

        loadTipoProduto();
    }

    const upTipoProduto = async (id_tipo, desc) => {

        await fetch(`http://localhost:3333/tipoProduto/${id_tipo}`, {
            method: "put",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ desc })
        });

        loadTipoProduto();
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

    const createRow = (tipo) => {
        const { id_tipo, desc_tipo } = tipo;

        const tr = createElement("tr");

        const tdDesc = createElement("td", desc_tipo);

        const tdActions = createElement("td");

        const editBtn = createElement("button", "", '<span class="material-symbols-outlined">edit</span>');
        const delBtn = createElement("button", "", '<span class="material-symbols-outlined">delete</span>');

        // UPDATE ->

        const editForm = createElement("form");
        const editInput = createElement("input");

        editInput.value = desc_tipo;
        editForm.appendChild(editInput);

        editForm.addEventListener("submit", (event) => {
            event.preventDefault();

            upTipoProduto(id_tipo, editInput.value);
        })

        editBtn.addEventListener("click", () => {
            tdDesc.innerText = "";
            tdDesc.appendChild(editForm);
        })

        // <- UPDATE

        editBtn.classList.add("btn-action");
        delBtn.classList.add("btn-action");

        delBtn.addEventListener("click", () => delTipoProduto(id_tipo));

        tdActions.appendChild(editBtn);
        tdActions.appendChild(delBtn);

        tr.appendChild(tdDesc);

        tr.appendChild(tdActions);

        return tr;
    }

    const loadTipoProduto = async () => {
        const tipos = await fetchTipoProduto();

        tbody.innerHTML = "";

        tipos.forEach((tipo) => {
            const tr = createRow(tipo);
            tbody.appendChild(tr); // Verifica se o tr nao é null, se tiver algo faz o tbody
        });
    }

    addForm.addEventListener("submit", addTipoProduto);

    loadTipoProduto();
}