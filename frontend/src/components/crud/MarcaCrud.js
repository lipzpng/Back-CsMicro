export default function MarcaCrud() {
    const tbody = document.querySelector("tbody");
    const addForm = document.querySelector(".add-form");

    const inputDesc = document.querySelector(".input-desc");
    const inputLogo = document.querySelector(".input-logo");
    const inputUrl = document.querySelector(".input-url");

    if (!tbody) {
        console.error("Elemento <tbody> não encontrado!");
        return;
    }

    const fetchMarcas = async () => {
        const res = await fetch("http://localhost:3333/marca");
        const marcas = await res.json();
        return marcas;
    }

    const addMarca = async (event) => {
        event.preventDefault();

        const marca = {
            desc: inputDesc.value,
            logo: inputLogo.value,
            url: inputUrl.value
        };

        await fetch("http://localhost:3333/marca", {
            method: "post",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(marca)
        })

        loadMarcas();
        addForm.value = "";
    }

    const delMarca = async (id_marca) => {
        await fetch(`http://localhost:3333/marca/${id_marca}`, {
            method: "delete"
        });
        console.log(id_marca);

        loadMarcas();
    }

    const upMarca = async (id_marca, desc, logo, url) => {

        await fetch(`http://localhost:3333/marca/${id_marca}`, {
            method: "put",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ desc, logo, url })
        });

        loadMarcas();
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
        const { id_marca, desc_marca, logo_marca, url_marca } = modelo;

        const tr = createElement("tr");

        const tdDesc = createElement("td", desc_marca);
        const tdMarca = createElement("td", logo_marca);
        const tdUrl = createElement("td", url_marca);

        const tdActions = createElement("td");

        const editBtn = createElement("button", "", '<span class="material-symbols-outlined">edit</span>');
        const delBtn = createElement("button", "", '<span class="material-symbols-outlined">delete</span>');

        // UPDATE ->

        const editForm = createElement("form");
        const editInput = createElement("input");

        editInput.value = desc_marca;
        editForm.appendChild(editInput);

        editForm.addEventListener("submit", (event) => {
            event.preventDefault();

            upMarca(id_marca, editInput.value, logo_marca, url_marca);
        })

        editBtn.addEventListener("click", () => {
            tdDesc.innerText = "";
            tdDesc.appendChild(editForm);
        })

        // <- UPDATE

        editBtn.classList.add("btn-action");
        delBtn.classList.add("btn-action");

        delBtn.addEventListener("click", () => delMarca(id_marca));

        tdActions.appendChild(editBtn);
        tdActions.appendChild(delBtn);

        tr.appendChild(tdDesc);
        tr.appendChild(tdMarca);
        tr.appendChild(tdUrl);

        tr.appendChild(tdActions);

        return tr;
    }

    const loadMarcas = async () => {
        const marcas = await fetchMarcas();

        tbody.innerHTML = "";

        marcas.forEach((marca) => {
            const tr = createRow(marca);
            tbody.appendChild(tr); // Verifica se o tr nao é null, se tiver algo faz o tbody
        });
    }

    addForm.addEventListener("submit", addMarca);

    loadMarcas();
}