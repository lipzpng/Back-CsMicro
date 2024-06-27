export default function MarcaCrud() {
    const tbody = document.querySelector("tbody");
    const addForm = document.querySelector(".add-form");

    const inputDesc = document.querySelector(".input-desc");

    if (!tbody) {
        console.error("Elemento <tbody> não encontrado!");
        return;
    }

    const fetchModelos = async () => {
        const res = await fetch("http://localhost:3333/modelo");
        const modelos = await res.json();
        return modelos;
    }

    const addModelo = async (event) => {
        event.preventDefault();

        const modelo = {
            desc: inputDesc.value
        };

        await fetch("http://localhost:3333/modelo", {
            method: "post",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(modelo)
        })

        loadModelos();
        addForm.value = "";
        inputDesc.value = "";
    }

    const delModelo = async (id_modelo) => {
        await fetch(`http://localhost:3333/modelo/${id_modelo}`, {
            method: "delete"
        });
        console.log(id_modelo);

        loadModelos();
    }

    const upModelo = async (id_modelo, desc) => {

        await fetch(`http://localhost:3333/modelo/${id_modelo}`, {
            method: "put",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ desc })
        });

        loadModelos();
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

    const createRow = (modelo) => {
        const { id_modelo, desc_modelo } = modelo;

        const tr = createElement("tr");

        const tdDesc = createElement("td", desc_modelo);

        const tdActions = createElement("td");

        const editBtn = createElement("button", "", '<span class="material-symbols-outlined">edit</span>');
        const delBtn = createElement("button", "", '<span class="material-symbols-outlined">delete</span>');

        // UPDATE ->

        const editForm = createElement("form");
        const editInput = createElement("input");

        editInput.value = desc_modelo;
        editForm.appendChild(editInput);

        editForm.addEventListener("submit", (event) => {
            event.preventDefault();

            upModelo(id_modelo, editInput.value);
        })

        editBtn.addEventListener("click", () => {
            tdDesc.innerText = "";
            tdDesc.appendChild(editForm);
        })

        // <- UPDATE

        editBtn.classList.add("btn-action");
        delBtn.classList.add("btn-action");

        delBtn.addEventListener("click", () => delModelo(id_modelo));

        tdActions.appendChild(editBtn);
        tdActions.appendChild(delBtn);

        tr.appendChild(tdDesc);

        tr.appendChild(tdActions);

        return tr;
    }

    const loadModelos = async () => {
        const modelos = await fetchModelos();

        tbody.innerHTML = "";

        modelos.forEach((modelo) => {
            const tr = createRow(modelo);
            tbody.appendChild(tr); // Verifica se o tr nao é null, se tiver algo faz o tbody
        });
    }

    addForm.addEventListener("submit", addModelo);

    loadModelos();
}